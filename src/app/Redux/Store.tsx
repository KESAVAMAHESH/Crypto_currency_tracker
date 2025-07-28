import {configureStore} from "@reduxjs/toolkit"
import SearchSlice from './SearchSlice'
import SelectedSlice from './SelectedSlice'
import CoinSlice from "./CoinSlice"

export const store = configureStore({
  reducer: {
    search: SearchSlice,
    selectedcategory:SelectedSlice,
    coindata:CoinSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;