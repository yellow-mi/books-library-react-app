import Book from "./Book";
import React from "react";

export default function SearchResult(props) {
  const { myBooks, searchBooks, shelfChanged } = props

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchBooks.map(searchBook => {

          let shelf = null
          let ids = myBooks.currentlyReading
          if (ids.find(id => id === searchBook.id)) shelf = 'currentlyReading'
          ids = myBooks.wantToRead
          if (ids.find(id => id === searchBook.id)) shelf = 'wantToRead'
          ids = myBooks.read
          if (ids.find(id => id === searchBook.id)) shelf = 'read'

          return <li key={searchBook.id}>
            <Book
              book={searchBook}
              shelf={shelf}
              shelfChanged={shelfChanged}
            />
          </li>
        }
        )}
      </ol>
    </div>
  )
}