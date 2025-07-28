import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from '../Props/AllProps';

const initialState: SearchState = {
  query: '',
};


const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    clearQuery(state) {
      state.query = '';
    },
  },
});

export const { setQuery, clearQuery } = SearchSlice.actions;
export default SearchSlice.reducer;