import React, { Component } from 'react';
import axios from 'axios';

import BookList from './bookList';
import BookSearch from './bookSearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    this.submitQuery = this.submitQuery.bind(this);
    this.fetchBookData = this.fetchBookData.bind(this);
  };

  submitQuery (input) {};
  fetchBookData(){};

  render() {
    const { books } = this.state;
    return (
      <div>
        <h1>Welcome to Stephen's Book Search!</h1>
        <div>
          <BookSearch
            onSubmit={this.submitQuery}
          />
        </div>
        <div>
          <BookList
            books={books}
          />
        </div>
      </div>
    )
  }
}

export default App;