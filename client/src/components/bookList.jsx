import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return (
      <div>
        <p> Placeholder: The book list </p>
      </div>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.array
};

export default BookList;