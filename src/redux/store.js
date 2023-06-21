import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiURL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mos14bKdA08P40ezxXql/books';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(apiURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Request failed');
    }
  }
);

export const addBook = createAsyncThunk(
  'addBooks/addBook',
  async (book, thunkAPI) => {
    try {
      const response = await axios.post(apiURL, book);

      if (response.status === 201) {
        thunkAPI.dispatch(fetchBooks());
        return null;
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Post request failed');
    }
  }
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (itemId, thunkAPI) => {
    try {
      const response = await axios.delete(`${apiURL}/${itemId}`);

      if (response.status === 200) {
        thunkAPI.dispatch(fetchBooks());
        return null;
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Could not delete book');
    }
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addBook.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(removeBook.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default bookSlice.reducer;

// import { configureStore } from '@reduxjs/toolkit';
// import bookReducer from './books/bookSlice';
// import categoryReducer from './categories/categoriesSlice';

// const rootReducer = {
//   books: bookReducer,
//   categories: categoryReducer,
// };

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
