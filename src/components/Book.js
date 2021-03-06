import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

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
    <tr className="book">
      <td>
        {title}
        {' '}
        of
        {' '}
        {category}
        {' '}
        category
      </td>
      <td><button type="submit" className="btn btn-sm btn-danger" data-id="0" onClick={deleteBookFromStore}>Remove</button></td>
    </tr>
  );
};

export default Book;
