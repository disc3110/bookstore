import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const CreateNewBook = () => {
  const dispatch = useDispatch();
  const titleNew = useRef(null);
  const authorNew = useRef(null);
  const submitBookToStore = () => {
    if (titleNew.current.value && authorNew.current.value) {
      const newBook = {
        item_id: uuidv4(),
        title: titleNew?.current?.value,
        author: authorNew?.current?.value,
      };
      dispatch(addBook(newBook));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitBookToStore();
    titleNew.current.value = '';
    authorNew.current.value = '';
  };
  return (
    <div>
      <h3>Add a new Book</h3>
      <form onSubmit={handleSubmit}>
        <input ref={titleNew} label="Title" type="text" placeholder="Book title" />
        <input ref={authorNew} label="Author" type="text" placeholder="Book author" />
        <input label="Create" type="submit" name="Create" value="Create" />
      </form>
    </div>
  );
};

export default CreateNewBook;
