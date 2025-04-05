import React from 'react';
import { EnergyMixChartPie } from '../components/organisms/EnergyMixChartPie';
import { Label } from '../components/atoms/Label';
import { formatDate } from '../../utils/FormatDate';
import { EnergyMixChartBar } from '../components/organisms/EnergyMixChartBar';
import { EnergyMixChartLine } from '../components/organisms/EnergyMixChartLine';
import { FuelItem } from '../components/molecules/FuelItem';
import { useHome } from './hook';

export const Home: React.FC = () => {
  const { energyMix, error, colors } = useHome();

  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;
  if (!energyMix) return <div className="text-center text-white p-4">Loading...</div>;
 
  const DATE = `From: ${formatDate(energyMix.from)} - To: ${formatDate(energyMix.to)}`

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 p-4 min-h-screen">
      <div className="w-full max-w-7xl grid gap-6">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            UK Energy Mix
          </h1>
          <Label
            text={DATE.toUpperCase()}
            className="text-gray-300 text-sm sm:text-base md:text-lg"
          />
        </div>

        <div className="container">
          <div className="graphics-container">
            <div className="charts">
              <div className="chart">
                <EnergyMixChartPie data={energyMix.generationmix} />
              </div>
              <div className="chart">
                <EnergyMixChartBar data={energyMix.generationmix} />
              </div>
            </div>
            <div className="chart">
              <EnergyMixChartLine data={energyMix.generationmix} />
            </div>
          </div>

          <div className="fuel-items">
            <div className="flex flex-wrap justify-center items-center gap-4">
              {energyMix.generationmix.map((fuel, idx) => (
                <FuelItem key={fuel.fuel} fuel={fuel.fuel} percentage={fuel.perc}
                color={colors[idx]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Home;