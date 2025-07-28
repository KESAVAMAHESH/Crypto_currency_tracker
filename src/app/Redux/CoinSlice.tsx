import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoinState } from '../Props/AllProps';

const initialState: CoinState = {
  coins: [],
   selectedCoin: null,
};

const CoinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setCoins(state, action: PayloadAction<any[]>) {
      state.coins = action.payload;
    },
    clearCoins(state) {
      state.coins = [];
    },
    setSelectedCoin(state, action: PayloadAction<any>) {
      state.selectedCoin = action.payload;
    },
    clearSelectedCoin(state) {
      state.selectedCoin = null;
    },
  },
});

export const { setCoins, clearCoins,setSelectedCoin,clearSelectedCoin } = CoinSlice.actions;
export default CoinSlice.reducer;