// utils/chartOptions.ts
import type { ChartOptions } from 'chart.js';
import themes from '../StyleThemes';

export const getChartOptions = (range: string): ChartOptions<'line'> => ({
  responsive: true,
  scales: {
    x: {
      type: 'time' as const,
      time: {
        unit: range === '1' ? 'hour' : 'day',
      },
      grid: {
        color: themes.colors.white,
      },
      ticks: {
        color: themes.colors.white,
        font: {
          family: themes.font.primary,
        },
      },
    },
    y: {
      grid: {
        color: themes.colors.white,
      },
      ticks: {
        color: themes.colors.white,
        font: {
          family: themes.font.primary,
        },
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: themes.colors.white,
        font: {
          family: themes.font.primary,
        },
      },
    },
    tooltip: {
      callbacks: {
        label: (context: any) => `$${context.raw.toFixed(2)}`,
      },
    },
  },
});
