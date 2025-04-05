import React from 'react';
import { render } from '@testing-library/react';
import { EnergyMixChartPie } from '../../ui/components/organisms/EnergyMixChartPie';
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

describe('EnergyMixChartPie', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería renderizar el gráfico correctamente', () => {
    const { container } = render(<EnergyMixChartPie data={testData} />);

    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('debería pasar los datos correctos al gráfico', () => {
    render(<EnergyMixChartPie data={testData} />);

    const Chart = require('chart.js').Chart;
    expect(Chart).toHaveBeenCalledTimes(1);

    const chartConfig = Chart.mock.calls[0][1];
    expect(chartConfig.data.labels).toEqual(['Coal', 'Gas', 'Wind', 'Solar', 'Hydro']);
    expect(chartConfig.data.datasets[0].data).toEqual([30, 40, 15, 10, 5]);
  });

  it('debería configurar las opciones del gráfico correctamente', () => {
    render(<EnergyMixChartPie data={testData} />);

    const Chart = require('chart.js').Chart;
    expect(Chart).toHaveBeenCalledTimes(1);

    const chartConfig = Chart.mock.calls[0][1];
    const options = chartConfig.options;

    expect(options.responsive).toBe(true);
    expect(options.maintainAspectRatio).toBe(true);
    expect(options.aspectRatio).toBe(2.5);
    expect(options.plugins.legend.position).toBe('top');
  });

  it('debería aplicar los estilos correctos al contenedor', () => {
    const { container } = render(<EnergyMixChartPie data={testData} />);

    const chartContainer = container.firstChild;
    expect(chartContainer).toHaveClass('w-full');
    expect(chartContainer).toHaveClass('h-full');
  });
});
