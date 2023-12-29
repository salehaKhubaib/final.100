
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk('list/fetchCategories', async () => {
  const response = await fetch('https://github.com/cheatsnake/emojihub ');
  const data = await response.json();
  return data;
});
