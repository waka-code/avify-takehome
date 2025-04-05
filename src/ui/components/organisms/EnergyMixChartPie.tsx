import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { GenerationMix } from '../../../core/entities/Generation';
import { useEnergyMixChartPie } from './hook';

ChartJS.register(ArcElement, Tooltip, Legend);

export interface EnergyMixChartProps {
 data: GenerationMix[];
}

export const EnergyMixChartPie: React.FC<EnergyMixChartProps> = ({ data }) => {
 const { chartData, options } = useEnergyMixChartPie(data);

 return (
<div className="w-full h-[300px] sm:h-[350px] lg:h-[400px]">
   <Pie data={chartData} options={options} />
  </div>
 );
};