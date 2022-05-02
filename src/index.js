import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './SearchPage'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="search" element={<SearchPage />} />
    </Routes>
  </BrowserRouter>, document.getElementById('root'))
