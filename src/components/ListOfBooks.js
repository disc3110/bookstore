import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/books';

const ListOfBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const renderBooks = (bookCollection) => bookCollection.map((book) => (
    <Book
      key={book.item_id}
      item_id={book.item_id}
      title={book.title}
      category={book.category}
    />
  ));
  return (
    <table>
      <tbody>
        {renderBooks(books)}
      </tbody>
    </table>
  );
};

export default ListOfBooks;
