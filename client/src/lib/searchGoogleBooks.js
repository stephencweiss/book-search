import axios from "axios";

import BOOKS_API_KEY from '../config/bookapi';

const searchGoogleBooks = (options, callback) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes`, {
    params: {
      q: options.query,
      key: !options.key ? BOOKS_API_KEY : options.key,
    }
  })
    .then((response) => {this.setState({books: response.items})})
    .catch((err) => console.error(`There was an error -> `, err));
}

export default searchGoogleBooks;