import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoryReducer from './categories/categoriesSlice';

const initialState = {
  books: [],
  categories: 'Under construction',
};

const rootReducer = {
  books: bookReducer,
  categories: categoryReducer,
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
