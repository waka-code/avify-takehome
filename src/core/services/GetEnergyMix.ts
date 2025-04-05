import { GenerationData } from '../entities/Generation';
import { fetchEnergyMix } from '../../api/carbonIntensityApi';

export const getEnergyMix = async (): Promise<GenerationData> => {
  const response = await fetchEnergyMix();
  return response.data.data;
};