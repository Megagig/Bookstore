import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categoriesSlice';
import bookReducer from './books/bookSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
