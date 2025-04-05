import axios from 'axios';
import { getEnergyMix } from '../../core/services/GetEnergyMix';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getEnergyMix', () => {
  it('debería devolver los datos correctos cuando la API responde correctamente', async () => {
    const mockResponse = {
      data: {
        data: {
          from: '2025-04-05T00:00Z',
          to: '2025-04-05T01:00Z',
          generationmix: [
            { fuel: 'Coal', perc: 30 },
            { fuel: 'Gas', perc: 40 },
            { fuel: 'Wind', perc: 15 },
            { fuel: 'Solar', perc: 10 },
            { fuel: 'Hydro', perc: 5 },
          ],
        },
      },
    };

    mockedAxios.get.mockResolvedValue(mockResponse);

    const result = await getEnergyMix();

    expect(result).toEqual(mockResponse.data.data);

    expect(mockedAxios.get).toHaveBeenCalledWith('https://api.carbonintensity.org.uk/generation');
  });

  it('debería manejar errores cuando la API falla', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Error en la API'));
    await expect(getEnergyMix()).rejects.toThrow('Error en la API');
  });
});
