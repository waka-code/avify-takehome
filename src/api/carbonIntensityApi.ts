import axios from 'axios';
import { GenerationData } from '../core/entities/Generation';

export const fetchEnergyMix = async () => {
  return axios.get<{ data: GenerationData }>('https://api.carbonintensity.org.uk/generation');
};