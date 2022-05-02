import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import SearchResult from './SearchResult'

export default class SearchPage extends Component {
    state = {
        searchBooks: [],
        myBooks: [],
        searchQuery: ''
    }

    handleChange = (event) => {
        const newQuery = event.target.value
        this.setState((oldState) => ({
            ...oldState,
            searchQuery: newQuery
        }))
        this.runSearch()
    }

    runSearch = () => {
        const query = this.state.searchQuery
        BooksAPI.search(query, 10).then(books => {
            const newBooks = books || []
            this.setState((oldState) => ({
                ...oldState,
                searchBooks: newBooks
            }))
        })
    }

    shelfChanged = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then((booksId) => {
            this.setState(oldState => ({
                ...oldState,
                myBooks: booksId
            }))
        })
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.formatMyBooks(books)
        })
    }

    formatMyBooks = (books) => {
        let booksTemp = {
            currentlyReading: [],
            wantToRead: [],
            read: []
        }
        books.forEach(book => booksTemp[book.shelf].push(book.id))

        this.setState((prevState) => ({
            ...prevState,
            myBooks: booksTemp
        }))
    }

    render() {
        const { myBooks, searchBooks, searchQuery } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            onChange={this.handleChange}
                            placeholder="Search by title or author"
                            type="text"
                            value={searchQuery}
                        />
                    </div>
                </div>
                <SearchResult myBooks={myBooks} searchBooks={searchBooks} shelfChanged={this.shelfChanged} />
            </div>
        )
    }
}