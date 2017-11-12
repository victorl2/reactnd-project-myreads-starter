import Book from './Book';
import React from 'react';
import PropTypes from 'prop-types'
import If from './If';
import './Bookshelf.css';

function Bookshelf(props){
    return (
      <div className="bookshelf">
        {props.title && <h2 className="bookshelf-title">{props.title}</h2>}
        <If test={props.books.length > 0}
          main={
            <div className="bookshelf-books">
              <ol className="books-grid">
                { props.books.map((book) => (
                  <li key={book.id}>
                    <Book
                      moveBookshelf={props.updateBooksInShelf}
                      title={book.title}
                      id={book.id}
                      authors={book.authors}
                      shelf={book.shelf}
                      cover={book.imageLinks?book.imageLinks.thumbnail:''}
                    />
                  </li>
                ))}
              </ol>
            </div>
          }
          secondary={
            <div className="alert no-books">
              You don't have any books in this shelf
            </div>
          }
        />
      </div>
    );
}

Bookshelf.propTypes = {
    books:PropTypes.array.isRequired,
    updateBooksInShelf: PropTypes.func.isRequired
}

export default Bookshelf;
