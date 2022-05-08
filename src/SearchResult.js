import Book from "./Book";
import React from "react";

export default function SearchResult(props) {
  const { myBooks, searchBooks, shelfChanged } = props

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchBooks.map(searchBook => {

          let shelf = null

          if (myBooks.currentlyReading.find(id => id === searchBook.id)) shelf = 'currentlyReading'

          if (myBooks.wantToRead.find(id => id === searchBook.id)) shelf = 'wantToRead'

          if (myBooks.read.find(id => id === searchBook.id)) shelf = 'read'

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