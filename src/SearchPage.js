import React, { Component } from 'react'

export default function SearchPage(props) {
    const { changeStatus } = props
    
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a className="close-search" onClick={changeStatus}>Close</a>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid"></ol>
            </div>
        </div>
    )
}