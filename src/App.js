import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'

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
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

changeStatus = () => {
  this.setState((prevState) => ({
    showSearchPage: !prevState.showSearchPage
  }))
}

  render() {
//    console.log("First book: ", this.state.books[2])
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage changeStatus={this.changeStatus} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                  shelves.map(
                    (shelfData, index) => <Shelf books={this.state.books} data={shelfData} key={index} />
                  )
                }
              </div>
            </div>
            <div className="open-search">
              <a onClick={this.changeStatus}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
