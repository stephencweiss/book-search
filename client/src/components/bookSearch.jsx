import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookQuery: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    const stateName = event.target.id;
    const stateValue = event.target.value;
    this.setState({ [stateName]: stateValue });
  }

  handleSubmit() {};

  render() {
    const { bookQuery } = this.state
    return (
      <div>
        <form className="book-query-builder">
          <label htmlFor="book">Book Search</label>
          <input
            id="bookQuery"
            name="bookQuery"
            value={ bookQuery }
            onChange={ this.handleChange }
            placeholder={ 'Search for a book' }
            >
          </input>
        </form>
        <button className="book-query-submission" onClick={ this.handleSubmit }>Submit</button>
      </div>
    )
  };
}

BookSearch.propTypes = {
  onSubmit: PropTypes.func
};

export default BookSearch;
