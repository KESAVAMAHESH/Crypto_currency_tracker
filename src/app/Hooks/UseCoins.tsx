// hooks/useCoins.ts
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setCoins,clearCoins } from '../Redux/CoinSlice';
import { fetchCoinsByCategory, fetchRandomCoins } from '../utils/Api';

export const useCoins = (category: string | null) => {
  const dispatch = useDispatch();

  const queryFn = async () => {
    try{
         const data = category
      ? await fetchCoinsByCategory(category)
      : await fetchRandomCoins();
    dispatch(setCoins(data));
    console.log("the query runs")
    return data;
    }catch (error){
      throw error;
    }

  };

  return useQuery({
    queryKey: ['coins', category || 'random'],
    queryFn,
    refetchInterval: 30000,
     retry: (failureCount, error:any) => {
    if (error?.code === 'ERR_NETWORK') {
        return false;
      }
        return failureCount < 3;
    },
    enabled: true,

  });
};
