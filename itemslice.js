// listSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: { items: [], filter: '' },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setItems, setFilter } = listSlice.actions;
export default listSlice.reducer;
