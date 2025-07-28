'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import themes from '@/app/StyleThemes';
import NoDataMessage from '../DynamicComponents/NoDataMessage';

const CoinDetails: React.FC = () => {
  const coin = useSelector((state: RootState) => state.coindata.selectedCoin);

  if (!coin) {
    return <NoDataMessage message="No Data Found" />;
  }

  return (
    <div style={styles.scrollContainer}>
      <div style={styles.card}>
        <div style={styles.header}>
          <img
            src={coin.image}
            alt={coin.name}
            style={styles.image}
          />
          <h2 style={styles.title}>{coin.name}</h2>
        </div>

        <div style={styles.detailsGrid}>
          <Detail label="Symbol" value={coin.symbol?.toUpperCase()} />
          <Detail label="Market Cap Rank" value={coin.market_cap_rank} />
          <Detail label="Price" value={`$${coin.current_price?.toLocaleString()}`} />
          <Detail label="Market Cap" value={`$${coin.market_cap?.toLocaleString()}`} />
          <Detail label="Total Supply" value={coin.total_supply?.toLocaleString()} />
          <Detail label="Max Supply" value={coin.max_supply?.toLocaleString()} />
          <Detail label="Circulating Supply" value={coin.circulating_supply?.toLocaleString()} />
          <Detail label="24h High" value={`$${coin.high_24h}`} />
          <Detail label="24h Low" value={`$${coin.low_24h}`} />
          <Detail label="24h Change" value={`${coin.price_change_percentage_24h?.toFixed(2)}%`} />
          <Detail label="ATH" value={`$${coin.ath}`} />
          <Detail label="ATH Change %" value={`${coin.ath_change_percentage?.toFixed(2)}%`} />
          <Detail label="ATH Date" value={coin.ath_date?.split('T')[0]} />
          <Detail label="ATL" value={`$${coin.atl}`} />
          <Detail label="ATL Change %" value={`${coin.atl_change_percentage?.toFixed(2)}%`} />
          <Detail label="ATL Date" value={coin.atl_date?.split('T')[0]} />
          <Detail label="Last Updated" value={coin.last_updated?.split('T')[0]} />
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;

const Detail = ({ label, value }: { label: string; value: string | number | undefined }) => (
  <div style={styles.detailRow}>
    <span style={styles.label}>{label}:</span>
    <span style={styles.value}>{value ?? 'N/A'}</span>
  </div>
);

const styles: { [key: string]: React.CSSProperties } = {
  scrollContainer: {
    maxHeight: 'calc(100vh - 160px)',
    overflowY: 'auto',
    padding: '1rem',
    fontFamily: themes.font.primary,
    background: themes.colors.gray,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  card: {
    backgroundColor: themes.colors.black,
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '1.5rem',
    width: '100%',
    maxWidth: '700px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  image: {
    width: '60px',
    height: '60px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: themes.colors.white,
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.75rem',
  },
  detailRow: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.9rem',
  },
  label: {
    fontWeight: 500,
    color: themes.colors.white,
  },
  value: {
    color: themes.colors.gray,
  },
};
