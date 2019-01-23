import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookListElement from './bookListElement';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.updateSearch = this.updateSearch.bind(this);
  };

  updateSearch(e) {
    this.props.updateSearchWithPage(e.target.dataset.direction);
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        {books.map((book, i) => <BookListElement
          book={book}
          id={i}
          key={`key-${i}`}
        />)}
        <button onClick={this.updateSearch} data-direction='down'>Previous Page</button>
        <button onClick={this.updateSearch} data-direction='up'>Next Page</button>
      </div>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.array
};

export default BookList;