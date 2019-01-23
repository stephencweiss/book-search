import React, { Component } from 'react';
import axios from 'axios';

import BookList from './bookList';
import BookSearch from './bookSearch';

import BOOKS_API_KEY from '../config/bookapi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      pageNum: 0,
      query: '',
    };
    this.searchGoogleBooks = this.searchGoogleBooks.bind(this);
    this.updateSearchWithPage = this.updateSearchWithPage.bind(this);
  };

  updateSearchWithPage (direction) {
    let { pageNum, query } = this.state;
    pageNum = direction === 'up' ? this.state.pageNum + 1 : Math.max( this.state.pageNum - 1, 0);
    this.searchGoogleBooks (query, pageNum);
  }

  searchGoogleBooks (query, startIndex, maxResults = 10) {
    startIndex = startIndex ? startIndex : this.state.pageNum;
    axios.get(`https://www.googleapis.com/books/v1/volumes`, {
      params: {
        q: query,
        key: BOOKS_API_KEY,
        startIndex,
        maxResults
      }
    })
      .then(response => this.setState({ books: response.data.items, query }))
      .catch(err => console.error(`There was an error -> `, err));
  };

  render() {
    const { books, pageNum, query } = this.state;
    return (
      <div>
        <h1>Welcome to Stephen's Book Search!</h1>
        <div>
          <BookSearch
            searchGoogleBooks = { this.searchGoogleBooks }
          />
        </div>
        <div>
          <BookList
            books={ books }
            pageNum={ pageNum }
            query={ query }
            updateSearchWithPage={ this.updateSearchWithPage }
          />
        </div>
      </div>
    )
  }
}

export default App;