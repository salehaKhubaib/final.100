
import { configureStore } from '@reduxjs/toolkit';
import listReducer from './listSlice';
import detailReducer from 'D:\sp22-bse-100\my-redux-app\src\Redux\list\detailslice.jsx';

const store = configureStore({
  reducer: {
    list: listReducer,
    detail: detailReducer,
  },
});

export default store;


