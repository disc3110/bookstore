import React from 'react';
import CreateNewBook from '../../components/CreateBook';
import ListOfBooks from '../../components/ListOfBooks';

const Home = () => (
  <div className="container">
    <ListOfBooks />
    <CreateNewBook />
  </div>
);
export default Home;
