// import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book }) => {
  const { type, title, author, percentage, chapter } = book;

  return (
    <>
      <div className="book-container">
        <div className="bookup">
          <div>
            <p>{type}</p>
            <h3>{title}</h3>
            <p>{author}</p>
          </div>
          <div>
            <button type="button">Comment</button>
            <button type="button">Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="percent">
          <p>Progress</p>
          <div className="Pencom">
            <h4>{percentage}</h4>
            <h4>Completed</h4>
          </div>
        </div>
        <div className="chapter-container">
          <p>Current Chapter</p>
          <p>{chapter}</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    chapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
