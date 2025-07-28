'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import Loader from '../DynamicComponents/Loader';
import CoinCard from '../DynamicComponents/CoinCard';
import NoDataMessage from '../DynamicComponents/NoDataMessage';
import { useCoins } from '../../Hooks/UseCoins';
import ErrorMessage from '../DynamicComponents/ErrorMessage';
import { CoinsByCategory } from '../../Props/AllProps';

const CoinsData : React.FC<CoinsByCategory> =({selectedFilter}) => {
  const dispatch=useDispatch()
  const selectedCategory = useSelector((state: RootState) => state.selectedcategory.selected);
  const coindata=useSelector((state: RootState) => state.coindata.coins);
  const searchQuery = useSelector((state: RootState) => state.search.query.toLowerCase());
  const { data: coinsdata=[], isLoading, isError,refetch,error } = useCoins(selectedCategory);
  const getFilteredData = () => {
  if (!coindata || coindata.length === 0) return [];
    let filtered = coindata.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery) ||
    coin.symbol.toLowerCase().includes(searchQuery)
  );

  switch (selectedFilter) {
    case 'Rank':
      return [...filtered].filter(c => c.market_cap_rank != null).sort(
        (a, b) => (a.market_cap_rank ?? Infinity) - (b.market_cap_rank ?? Infinity)
      );

    case 'Popular':
      return [...filtered].filter(c => c.total_volume != null).sort(
       (a, b) => (b.total_volume ?? 0) - (a.total_volume ?? 0)
  );

    case 'Top Gainers':
      return [...filtered].filter(c => c.price_change_percentage_24h != null).sort(
        (a, b) => (b.price_change_percentage_24h ?? -Infinity) - (a.price_change_percentage_24h ?? -Infinity)
      );

    case 'Top Losers':
      return [...filtered].filter(c => c.price_change_percentage_24h != null).sort(
        (a, b) => (a.price_change_percentage_24h ?? Infinity) - (b.price_change_percentage_24h ?? Infinity)
      );

    default:
      return filtered
  }
};
  if(isLoading){
    return <Loader text='Loading Data'/>
  }
  if (isError){
     const isRateLimited = (error as any)?.code === 'ERR_NETWORK';
    return(
    <ErrorMessage
     message={
          isRateLimited
            ? 'You have hit the rate limit. Please wait for 1 minute before retrying.'
            : 'Error fetching data. Please try again.'
        }
     iconStatus='error'
     onRetry={() => {
          if (isRateLimited) {
            setTimeout(() => {
              refetch();
            }, 60000); 
          } else {
            refetch();
          }
        }}
    />)
  }


  return (
    <div className="coin-grid">
      {getFilteredData().length === 0 ? (
        <NoDataMessage message="No Data Available" />
      ) : (
        getFilteredData().map((coin) => <CoinCard key={coin.id} coin={coin} />)
      )}
    </div>
  );

  }

export default CoinsData;