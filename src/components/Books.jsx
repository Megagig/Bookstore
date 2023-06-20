import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/bookSlice';
import BookList from './BookList';
import BookInfo from './BookInfo';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleAddBook = (title, author) => {
    const newBook = {
      item_id: `item${books.length + 1}`,
      title,
      author,
      category: 'Uncategorized',
    };
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <>
      <BookList books={books} handleRemoveBook={handleRemoveBook} />
      <BookInfo handleAddBook={handleAddBook} />
    </>
  );
};

export default Books;
