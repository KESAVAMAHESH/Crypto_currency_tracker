import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_COIN_API;

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/categories/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error
  }
};
export const fetchCoinsByCategory = async (categoryId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        category: categoryId,
        order: 'market_cap_desc',
        per_page: 50,
        page: 1,
        sparkline: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching coins for category:', error);
    throw error
  }
};

export const fetchRandomCoins = async () => {
  try {
    const randomPage = Math.floor(Math.random() * 100) + 1;

    const response = await axios.get(`${BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 50,    
        page: randomPage,  
        sparkline: false,
      },
    });
     console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching random coins:', error);
    throw error
  }
};
export const fetchChartData = async (coinId: string, range: string) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${range}`
  );
  const data = await res.json();
  return data.prices || [];
};