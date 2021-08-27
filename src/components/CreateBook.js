/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import '../style/addBook.css';

const CreateNewBook = () => {
  const dispatch = useDispatch();
  const titleNew = useRef(null);
  const categoryNew = useRef(null);
  const submitBookToStore = () => {
    if (titleNew.current.value && categoryNew.current.value) {
      const newBook = {
        item_id: uuidv4(),
        title: titleNew?.current?.value,
        category: categoryNew?.current?.value,
      };
      dispatch(addBook(newBook));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitBookToStore();
    titleNew.current.value = '';
    categoryNew.current.value = '';
  };
  return (
    <div className="addBook">
      <h4>ADD NEW BOOK</h4>
      <form onSubmit={handleSubmit}>
        <input className="title-input input" ref={titleNew} label="Title" type="text" placeholder="Book title" />
        <input className="category-input input" list="categories" ref={categoryNew} label="Category" type="text" placeholder="Category" />
        <datalist id="categories">
          <option value="Fantasy" />
          <option value="Romance" />
          <option value="Sci-fi" />
          <option value="Horror" />
        </datalist>
        <input className="submit-input" label="Create" type="submit" name="Create" value="Create" />
      </form>
    </div>
  );
};

export default CreateNewBook;
