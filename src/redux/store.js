import { configureStore } from '@reduxjs/toolkit';

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
