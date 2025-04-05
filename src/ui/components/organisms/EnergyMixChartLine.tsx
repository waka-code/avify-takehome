import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { GenerationMix } from '../../../core/entities/Generation';
import { Line } from 'react-chartjs-2';
import { useEnergyMixChartLine } from './hook';

ChartJS.register(LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale);

interface EnergyMixChartProps {
  data: GenerationMix[];
}

export const EnergyMixChartLine: React.FC<EnergyMixChartProps> = ({ data }) => {
  const { chartData , options } = useEnergyMixChartLine(data);

  return (
    <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px]">
      <Line data={chartData} options={options} />
    </div>
  );
};
