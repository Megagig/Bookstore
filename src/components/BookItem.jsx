// import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book, handleRemoveBook }) => (
  <div>
    <div>
      <p>{book.category}</p>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
    <div>
      <button type="button" onClick={() => handleRemoveBook(book.item_id)}>
        Remove
      </button>
    </div>
  </div>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default BookItem;
