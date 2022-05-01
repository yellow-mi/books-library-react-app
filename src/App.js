import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

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
    return (
      <div className="app">
        {/*<Routes>
        <Route exact path="/" render={() => (*/}
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
              {/*<Route path='/search' component={SearchPage} />*/}
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        {/*)} />
        </Routes>*/}
      </div>
    )
  }
}

export default BooksApp
