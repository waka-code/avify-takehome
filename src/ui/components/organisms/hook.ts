import { GenerationMix } from "../../../core/entities/Generation";

export function useEnergyMixChartLine(data: GenerationMix[]) {
  const chartData = {
    labels: data.map((item) => item.fuel),
    datasets: [
      {
        label: 'Percentage',
        data: data.map((item) => item.perc),
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        tension: 0.4, // Añadir curvatura a la línea
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 16,
            family: 'Inter, sans-serif',
          },
          color: '#ffffff',
          boxWidth: 20,
          padding: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.raw}%`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 14,
            family: 'Inter, sans-serif',
          },
          maxRotation: 45,
          minRotation: 0,
          autoSkip: true,
          maxTicksLimit: 5,
        },
      },
      y: {
        grid: {
          color: '#444444',
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 14,
            family: 'Inter, sans-serif',
          },
          beginAtZero: true,
          maxTicksLimit: 6,
        },
      },
    },
    // Configuraciones responsivas
    responsiveAnimationDuration: 0,
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
  };

  return { chartData, options };
}

export function useEnergyMixChartBar(data: GenerationMix[]) {
  const chartData = {
    labels: data.map((item) => item.fuel),
    datasets: [
      {
        label: 'Percentage',
        data: data.map((item) => item.perc),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF',
        ],
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 16,
            family: 'Inter, sans-serif',
          },
          color: '#ffffff',
          boxWidth: 20,
          padding: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.raw}%`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 14,
            family: 'Inter, sans-serif',
          },
          maxRotation: 45,
          minRotation: 0,
          autoSkip: true,
          maxTicksLimit: 5,
        },
      },
      y: {
        grid: {
          color: '#444444',
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 14,
            family: 'Inter, sans-serif',
          },
          beginAtZero: true,
          maxTicksLimit: 6,
        },
      },
    },
    // Configuraciones responsivas
    responsiveAnimationDuration: 0,
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
  };

  return { chartData, options };
}

export function useEnergyMixChartPie(data: GenerationMix[]) {
  const chartData = {
    labels: data.map((item) => item.fuel),
    datasets: [
      {
        data: data.map((item) => item.perc),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF',
        ],
      },
    ],
  };

  const options = {
    responsive: true, // Keep this as the boolean for general responsiveness
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 14,
            family: 'Inter, sans-serif',
          },
          color: '#ffffff',
          boxWidth: 20,
          padding: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.label}: ${context.raw}%`,
        },
      },
    },
    // Configuraciones responsivas
    responsiveAnimationDuration: 0,
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
    // Ajustes para diferentes tamaños de pantalla
    responsiveBreakpoints: [ // Renamed from `responsive` to `responsiveBreakpoints`
      {
        breakpoint: 640, // sm
        options: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 12,
              },
              boxWidth: 15,
            },
          },
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1024, // lg
        options: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14,
              },
            },
          },
          chart: {
            height: 350,
          },
        },
      },
    ],
  };

  return { chartData, options };
}