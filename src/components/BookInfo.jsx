import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook, fetchBooks } from '../redux/books/bookSlice';
import '../styles/BookInfo.css';

const NewBooks = () => {
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    category: '',
  });

  const { title, author, category } = bookData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addBookHandler = async (e) => {
    e.preventDefault();

    if (title !== '' && author !== '' && category !== '') {
      const newBook = {
        item_id: nanoid(),
        title,
        author,
        category,
      };

      await dispatch(addBook(newBook));
      await dispatch(fetchBooks());
      setBookData({
        title: '',
        author: '',
        category: '',
      });
    }
  };

  return (
    <>
      <form className="form-holder">
        <hr />
        <h3 className="heading">Add a new book...</h3>
        <div className="material">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={author}
            onChange={handleInputChange}
          />
          <select name="category" value={category} onChange={handleInputChange}>
            <option value="">Select Category</option>
            <option value="Memoir">Religion</option>
            <option value="Science">Technology</option>
            <option value="Travel">Education</option>
            <option value="Business/Finance">Business</option>
            <option value="Poetry">Finance</option>
            <option value="Science Fiction">Non-fiction</option>
            <option value="Horror">Fiction</option>
            <option value="Comedy/Humor">Agriculture</option>
            <option value="Drama/Play">Music</option>
            <option value="Novels/Comics">Drama</option>
            <option value="Cookbooks">Science</option>
          </select>
          <button type="button" onClick={addBookHandler}>
            Add Book
          </button>
        </div>
      </form>
    </>
  );
};

export default NewBooks;
