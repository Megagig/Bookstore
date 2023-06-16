// import React from 'react';
import BookList from './BookList';
import BookInfo from './BookInfo';

const Books = () => {
  const books = [
    {
      id: 1,
      type: 'Novel',
      title: 'Life of Elephants',
      author: 'Ezeokeke Lucy',
      percentage: 90,
      chapter: 'Chapter 20',
    },
    {
      id: 2,
      type: 'Non-fiction',
      title: 'The Millionaire Fastlane',
      author: 'MJ DeMarco',
      percentage: 50,
      chapter: 'Chapter 10',
    },
    {
      id: 3,
      type: 'Fiction',
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      percentage: 10,
      chapter: 'Chapter 1',
    },
  ];

  return (
    <>
      <BookList books={books} />
      <BookInfo />
    </>
  );
};

export default Books;
