import React from 'react';
import { render } from '@testing-library/react';
import { EnergyMixChartBar } from '../../ui/components/organisms/EnergyMixChartBar';
import { GenerationMix } from '../../core/entities/Generation';
import '@testing-library/jest-dom';

jest.mock('chart.js', () => {
  const actualChartJS = jest.requireActual('chart.js');

  const MockChart = jest.fn().mockImplementation((ctx, config) => ({
    ctx,
    config,
    destroy: jest.fn(),
    update: jest.fn(),
  })) as unknown as { new (ctx: any, config: any): any; register: jest.Mock };

  MockChart.register = jest.fn();

  return {
    ...actualChartJS,
    Chart: MockChart,
  };
});

const testData: GenerationMix[] = [
  { fuel: 'Coal', perc: 30 },
  { fuel: 'Gas', perc: 40 },
  { fuel: 'Wind', perc: 15 },
  { fuel: 'Solar', perc: 10 },
  { fuel: 'Hydro', perc: 5 },
];

describe('EnergyMixChartBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el gráfico correctamente', () => {
    const { container } = render(<EnergyMixChartBar data={testData} />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('debería pasar los datos correctos al gráfico', () => {
    render(<EnergyMixChartBar data={testData} />);
    const Chart = require('chart.js').Chart;
    expect(Chart).toHaveBeenCalledTimes(1);

    const chartConfig = Chart.mock.calls[0][1]; 
    expect(chartConfig.data.labels).toEqual(['Coal', 'Gas', 'Wind', 'Solar', 'Hydro']);
    expect(chartConfig.data.datasets[0].data).toEqual([30, 40, 15, 10, 5]);
    expect(chartConfig.data.datasets[0].label).toBe('Percentage');
  });

  it('debería configurar las opciones del gráfico correctamente', () => {
    render(<EnergyMixChartBar data={testData} />);

    const Chart = require('chart.js').Chart;
    expect(Chart).toHaveBeenCalledTimes(1);

    const chartConfig = Chart.mock.calls[0][1]; 
    const options = chartConfig.options;

    expect(options.responsive).toBe(true);
    expect(options.maintainAspectRatio).toBe(false);
    expect(options.plugins.legend.position).toBe('top');
    expect(options.scales.x.grid.display).toBe(false);
    expect(options.scales.y.ticks.beginAtZero).toBe(true);
  });

  it('debería aplicar los estilos correctos al contenedor', () => {
    const { container } = render(<EnergyMixChartBar data={testData} />);
    const chartContainer = container.firstChild;
    expect(chartContainer).toHaveClass('w-full');
    expect(chartContainer).toHaveClass('h-full');
    expect(chartContainer).toHaveClass('p-4');
    expect(chartContainer).toHaveClass('bg-white');
    expect(chartContainer).toHaveClass('bg-opacity-20');
    expect(chartContainer).toHaveClass('rounded-lg');
    expect(chartContainer).toHaveClass('shadow-md');
    expect(chartContainer).toHaveClass('backdrop-blur-sm');
  });
});
