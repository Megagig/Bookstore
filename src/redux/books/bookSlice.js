import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiURL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mos14bKdA08P40ezxXql/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    throw new Error('new error in fetching');
  }
});

export const addBook = createAsyncThunk('addBooks/addBook', async (book) => {
  try {
    await axios.post(apiURL, book);
  } catch (error) {
    throw new Error('Post request failed');
  }
});

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (itemId) => {
    try {
      await axios.delete(`${apiURL}/${itemId}`);
    } catch (error) {
      throw new Error('Could not delete book');
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
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: action.payload,
      }))
      .addCase(fetchBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export default bookSlice.reducer;
