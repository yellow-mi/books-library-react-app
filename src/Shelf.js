import React, { Component } from "react";
import './App.css'
import Book from "./Book";

class Shelf extends Component {
  render() {
    const { data: {shelfTitle} } = this.props
    const { books } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map(
                (book, index) => <li key={book.id}>
                  <Book book={book} />
                </li>
              )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf