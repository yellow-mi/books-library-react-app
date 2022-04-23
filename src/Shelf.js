import React, { Component } from "react";
import './App.css'

class Shelf extends Component {
  render() {
    const { data } = this.props
    const shelfTitle = data.shelfTitle

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: data.books[0].backgroundImage }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{data.books[0].title}</div>
                <div className="book-authors">{data.books[0].authors.map(
                  author => `${author}, `
                )}</div>
              </div>
            </li>
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: data.books[1].backgroundImage }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{data.books[1].title}</div>
                <div className="book-authors">{data.books[1].authors.map(
                  author => `${author}, `
                )}</div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf