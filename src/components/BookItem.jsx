import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/bookSlice';

const BookItem = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Could not fetch data.</p>;
  }

  if (!books) {
    return null;
  }

  const renderBook = (itemId, book) => {
    const { category, title, author, chapter } = book[0];

    const handleRemoveBook = () => {
      dispatch(removeBook(itemId));
    };

    return (
      <div key={itemId}>
        <div>
          <p>{category}</p>
          <h3>{title}</h3>
          <p>{author}</p>
          <div>
            <button type="button">Comment</button>
            <div>
              <button type="button" onClick={handleRemoveBook}>
                Remove
              </button>
            </div>
            <button type="button">Edit</button>
          </div>
        </div>
        <div>
          <h4>75%</h4>
          <div>Completed</div>
        </div>
        <div>
          <h3>Current Chapter</h3>
          <p>{chapter}</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {Object.entries(books).map(([itemId, book]) => renderBook(itemId, book))}
    </div>
  );
};

export default BookItem;
