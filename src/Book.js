import React, { Component } from 'react'

class Book extends Component {
  generateAuthorsList = (authors) => {
    let authorString = ''
    authors.forEach(
      author => {
        authorString += `${author}, `
      }
    )
    const from = 0
    const to = authorString.length - 2
    
    return authorString.substring(from, to)
  }

  render() {
    const { data: book } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128, height: 188, backgroundImage:
              book.backgroundImage
          }}></div>
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
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{this.generateAuthorsList(book.authors)}</div>
      </div>
    )
  }
}

export default Book