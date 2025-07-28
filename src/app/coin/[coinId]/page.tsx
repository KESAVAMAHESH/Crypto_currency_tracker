'use client';

import themes from '@/app/StyleThemes';
import ChartSection from '../../Components/RouterPageComponents/ChartSection';
import { useParams } from 'next/navigation';
import React from 'react'
import CoinDetails from '@/app/Components/RouterPageComponents/CoinDetails';

const CoinPage = () => {
 const params = useParams();
 const coinId= params.coinId as string

  
  return (
    <div className="responsive-page"  style={styles.page}>
      <div style={styles.leftPane} className="leftPanel card-hover-effect">
        <h1 style={styles.title}>{coinId.toUpperCase()}</h1>
        <CoinDetails/>
      </div>
      <div style={styles.rightPane} className="chart-pane rightPanel card-hover-effect right-pane">
        <ChartSection coinId={coinId} />
      </div>
    </div>
  );
}

export default CoinPage


const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: '100vh',
    backgroundColor: themes.colors.mintgreen,
    display: 'flex',
    flexDirection: 'row',
    padding: '2rem 1rem',
    gap: '1.5rem',
    boxSizing: 'border-box',
  },
  leftPane: {
    width: '30%',
    backgroundColor: themes.colors.gray,
    padding: '1.5rem',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    boxSizing: 'border-box',
  },
  rightPane: {
    width: '70%',
    backgroundColor: themes.colors.gray,
    padding: '1.5rem',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    boxSizing: 'border-box',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  title: {
    fontFamily: themes.font.highlight,
    fontSize: '2rem',
    color: themes.colors.white,
    marginBottom: '1.5rem',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
};

