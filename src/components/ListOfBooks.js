import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const ListOfBooks = () => {
  const books = useSelector((state) => state.booksReducer);
  const renderBooks = (bookCollection) => bookCollection.map((book) => (
    <Book
      key={book.item_id}
      item_id={book.item_id}
      title={book.title}
      author={book.author}
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
