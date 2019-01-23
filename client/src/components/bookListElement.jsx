import React, { Component } from 'react';

class BookListElement extends Component {
  constructor(props) {
    super(props);
  };

  render () {
    const {authors, canonicalVolumeLink, imageLinks, publisher, title} = this.props.book.volumeInfo;

    return (
      <div>
        <div className='book-image'>
          <img src={!imageLinks ? 'https://upload.wikimedia.org/wikipedia/commons/b/b2/High-contrast-image-missing.svg' : imageLinks.thumbnail}></img>
        </div>
        <div className='book-details'>
          <div className='book-title'>Title: {title}</div>
          <div className='book-author'>Primary Author: {!authors ? 'Unlisted' : authors[0]}</div>
          <div className='book-publisher'>Publisher: {publisher}</div>
        </div>
        <div className='book-additional-info'>
          <a href={canonicalVolumeLink}>More Info</a>
        </div>
        <br/>
      </div>
    )
  }
}

export default BookListElement;