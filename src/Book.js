import React from 'react';
import * as BooksAPI from './BooksAPI';


function Book(props){
  const moveBook = (props,event) => {
    if(props.shelf !== event.target.value){
      BooksAPI.update(props, event.target.value);
      props.moveBookshelf(props.id,event.target.value);
    }
  }
  const { id, title, cover, authors,shelf} = props;
  return (
    <div key={id} className="book">
      <div className="book-top">
        <div className="book-cover"
          style={{ width: 128, height: 193, backgroundImage:`url(${cover})` }}></div>
        <div className="book-shelf-changer">
          <select onChange={(evt) => moveBook(props,evt)} value={shelf}>
            <option disabled>Move to...</option>
            <option value="currentlyReading" >Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      {authors && <div className="book-authors">
        {authors.map((author) =>(`${author},`))}
      </div>
      }
    </div>
    );
}


export default Book;
