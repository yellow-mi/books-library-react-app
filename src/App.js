import './App.css'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import React from 'react'
import Shelf from './Shelf'

const shelves = [
  {
    shelfId: 'currentlyReading',
    shelfTitle: 'Currently Reading'
  },
  {
    shelfId: 'wantToRead',
    shelfTitle: 'Want to Read'
  },
  {
    shelfId: 'read',
    shelfTitle: 'Read'
  }
]

class BooksApp extends React.Component {
  state = {
    books: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  componentDidMount() {
    this.getAllBooks()
  }

  shelfChanged = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      this.getAllBooks()
    })
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {
                shelves.map(
                  (shelfData, index) => <Shelf books={this.state.books} data={shelfData} key={index} shelfChanged={this.shelfChanged} />
                )
              }
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
