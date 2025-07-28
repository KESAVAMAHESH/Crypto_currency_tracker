'use client';

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useQuery } from '@tanstack/react-query';
import DropDown from '../DynamicComponents/DropDown';
import { getChartOptions } from '../../utils/ChartOption';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import themes from '../../StyleThemes';
import Loader from '../DynamicComponents/Loader';
import ErrorMessage from '../DynamicComponents/ErrorMessage';
import { fetchChartData } from '@/app/utils/Api';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, TimeScale);



const ChartSection: React.FC<{ coinId: string }> = ({ coinId }) => {
  const [range, setRange] = useState('7');
const ranges:Record<string, string> = {
  '7D': '7',
  '1D': '1',
  '20D': '20',
  '30D': '30',
};
  const { data = [], isLoading, error } = useQuery({
    queryKey: ['chartData', coinId, range],
    queryFn: () => fetchChartData(coinId, range)
  });

  const chartData = {
    labels: (data as [number, number][]).map(([timestamp]) => new Date(timestamp)),
    datasets: [
      {
        label: `Price (USD)`,
        data: (data as [number, number][]).map(([_, price]) => price),
        borderColor: themes.colors.mintgreen,
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        fill: true,
        pointRadius: 0,
        tension: 0.3,
      },
    ],
  };



  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Market Chart</h2>
      <DropDown
        options={Object.keys(ranges)}
        onSelect={(key) => setRange(ranges[key])}
        />
      {isLoading ? (
        <Loader text='Loading Chart'/>
      ) : error ? (
        <ErrorMessage iconStatus='error'message='Error fetching Chart data'/>
      ) : (
         <Line data={chartData} options={getChartOptions(range)} />
      )}
    </div>
  );
};

export default ChartSection;

const styles = {

  container: {
    backgroundColor: themes.colors.black,
    padding: '20px',
    borderRadius: '16px',
    boxShadow: '0 2px 10px rgba(0,0,0,0)',
    marginBottom: '2rem',
  },
  title: {
    fontFamily: themes.font.primary,
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: themes.colors.white,
  },

};
