import React from 'react';
import CreateNewBook from '../../components/CreateBook';
import ListOfBooks from '../../components/ListOfBooks';

const Home = () => (
  <div>
    <ListOfBooks />
    <CreateNewBook />
  </div>
);
export default Home;
