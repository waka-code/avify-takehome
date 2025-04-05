import { GenerationData } from '../../core/entities/Generation';
import React, { useEffect, useState } from 'react';
import { getEnergyMix } from '../../core/services/GetEnergyMix';

export function useHome() {
  const [energyMix, setEnergyMix] = useState<GenerationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const colors = [
    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF',
  ]

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getEnergyMix();
        const fromDate = new Date(data.from);
        const toDate = new Date(data.to);

        const diffInMinutes = (toDate.getTime() - fromDate.getTime()) / (1000 * 60);
        if (diffInMinutes <= 30) {
          setEnergyMix(data);
        } else {
          setEnergyMix(null);
        }

        console.log('Energy Mix Data:', data);
      } catch (err) {
        setError('Failed to load energy mix data');
      }
    };
    loadData();
  }, []);

  return { energyMix, error, colors };
}