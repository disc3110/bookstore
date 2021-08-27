import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import '../style/book.css';

const Book = (props) => {
  // eslint-disable-next-line camelcase
  const { item_id, title, category } = props;
  Book.propTypes = {
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };
  const dispatch = useDispatch();
  const deleteBookFromStore = () => {
    dispatch(removeBook(item_id));
  };
  return (
    <div className="book-container">
      <div className="book-info">
        <p>{category}</p>
        <h1>{title}</h1>
        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={deleteBookFromStore}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-chart">
        <div className="pie" data-value="50" />
        <div className="percentage">
          <p>50%</p>
          <h3>Completed</h3>
        </div>
      </div>
      <div className="book-progress">
        <h3>CURRENT CHAPTER</h3>
        <p> Chapter 17 </p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
