import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { GenerationMix } from '../../../core/entities/Generation';
import { useEnergyMixChartBar } from './hook';

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

interface EnergyMixChartProps {
  data: GenerationMix[];
}

export const EnergyMixChartBar: React.FC<EnergyMixChartProps> = ({ data }) => {
  const { chartData, options } = useEnergyMixChartBar(data);

  return (
<div className="w-full h-[300px] sm:h-[350px] lg:h-[400px]">
      <Bar data={chartData} options={options} />
    </div>
  );
};