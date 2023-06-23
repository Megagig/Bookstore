import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/bookSlice';
import '../styles/BookItem.css';

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

  const style = {
    visibility: 'hidden',
    height: 0,
    width: 0,
  };
  const renderBook = (itemId, book) => {
    const { category, title, author } = book[0];

    const handleRemoveBook = async () => {
      await dispatch(removeBook(itemId));
      await dispatch(fetchBooks());
    };

    return (
      <div key={itemId} className="books">
        <div className="content">
          <div>
            <p className="parts">{category}</p>
            <h3 className="name">{title}</h3>
            <p className="owner">{author}</p>
          </div>
          <div className="key">
            <button type="button" className="btns">
              Comment
            </button>

            <button
              className="btn remove"
              type="button"
              onClick={handleRemoveBook}
            >
              Remove
            </button>
            <button type="button" className="btns">
              Edit
            </button>
          </div>
        </div>
        <div className="chapter-container">
          <div className="status">
            <div className="progression">
              <progress value="75" min="0" max="100" style={style}>
                80%
              </progress>
            </div>
            <div className="movement">
              <p className="percent">80%</p>
              <p className="completed">Completed</p>
            </div>
          </div>
          <div className="pages">
            <h3>CURRENT CHAPTER</h3>
            <p>Chapter 40</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
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
