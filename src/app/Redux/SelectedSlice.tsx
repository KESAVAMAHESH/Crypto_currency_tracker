import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedState } from '../Props/AllProps';

const initialState: SelectedState = {
  selected: '',
};

const SelectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    setSelected(state, action: PayloadAction<string>) {
      state.selected = action.payload;
    },
    clearSelected(state) {
      state.selected = '';
    },
  },
});

export const { setSelected, clearSelected } = SelectedSlice.actions;
export default SelectedSlice.reducer;
