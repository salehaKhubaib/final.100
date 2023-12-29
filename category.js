
import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: { items: [], filter: '', categories: [] , status: 'idle', },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;

    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
   setCategories: (state, action) => {
      state.categories = action.payload;
      state.status = 'succeeded';
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { setItems, setFilter, setCategories } = listSlice.actions;
export default listSlice.reducer;



