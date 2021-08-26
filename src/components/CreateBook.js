import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

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
    <div>
      <h3>Add a new Book</h3>
      <form onSubmit={handleSubmit}>
        <input ref={titleNew} label="Title" type="text" placeholder="Book title" />
        <input ref={categoryNew} label="Category" type="text" placeholder="Book category" />
        <input label="Create" type="submit" name="Create" value="Create" />
      </form>
    </div>
  );
};

export default CreateNewBook;
