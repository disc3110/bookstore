/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tFqilQVTaX9WFG4vOrMg/books';

const initialState = [];

export const addBook = (payload) => async (dispatch) => {
  const { item_id, title, category } = payload;
  try {
    const response = await axios.post(baseURL, { item_id, title, category });
    if (response.ok) {
      dispatch({
        type: ADD_BOOK,
        payload,
      });
    }
  } catch (error) {
    console.log(error);
  }
  return payload;
};

export const removeBook = (payload) => async (dispatch) => {
  try {
    const response = await axios.delete(`${baseURL}/${payload}`, { item_id: payload });
    if (response.ok) {
      dispatch({
        type: REMOVE_BOOK,
        payload,
      });
    }
  } catch (error) {
    console.log(error);
  }
  return payload;
};

export const getBooks = () => async (dispatch) => {
  try {
    const res = await axios.get(baseURL);
    const recivedData = Object.entries(res.data);
    const books = recivedData.map((book) => {
      const newObj = { item_id: book[0], title: book[1][0].title, category: book[1][0].category };
      return newObj;
    });
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
    return books;
  } catch (error) {
    console.log(error);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
