import React, { useState } from 'react';
import themes from '../../StyleThemes';
import { CoinCardProps } from '../../Props/AllProps';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setSelectedCoin } from '../../Redux/CoinSlice';

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  const isPositive = coin.price_change_percentage_24h >= 0;
  const router = useRouter();
  const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(setSelectedCoin(coin));  
      router.push(`/coin/${coin.id}`); 
  };
  
return (
    <div style={styles.card} className="coin-card" onClick={handleClick}>
      <img src={coin.image} alt={coin.name} style={styles.image} />
      <div style={styles.details}>
        <h3 style={styles.name}>
          {coin.name} ({coin.symbol.toUpperCase()})
        </h3>
        <p style={styles.text}>Rank: {coin.market_cap_rank}</p>
         <p style={styles.text}>
          Price: $
          {coin.current_price !== null && coin.current_price !== undefined
            ? coin.current_price.toLocaleString()
           : 'N/A'}
            </p>
         <p
         style={{
          ...styles.text,
         color: isPositive
          ? themes.colors.action.icon.success
         : themes.colors.action.icon.error,
         }}
        >
          24h Change:{' '}
           {coin.price_change_percentage_24h !== null && coin.price_change_percentage_24h !== undefined
             ? `${coin.price_change_percentage_24h.toFixed(2)}%`
             : 'N/A'}
         </p>
        <p style={styles.text}>
          Market Cap: $
         {coin.market_cap !== null && coin.market_cap !== undefined
          ? coin.market_cap.toLocaleString()
          : 'N/A'}
         </p>
      </div>
    </div>
  );

};

export default CoinCard;


const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: themes.colors.background.dark,
    borderRadius: 10,
    padding: 16,
    boxShadow: themes.colors.shadows.primary,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: `2px solid transparent`,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  details: {
    display: 'flex',
    flexDirection: 'column' as const,
    fontFamily: themes.font.primary,
    color: themes.colors.text.inverse,
  },
  name: {
    fontSize: '1.1rem',
    fontWeight: 'bold' as const,
    marginBottom: 5,
  },
  text: {
    fontSize: '0.9rem',
    margin: '2px 0',
    color: themes.colors.text.secondary,
  },
};
