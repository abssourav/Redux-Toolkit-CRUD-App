import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'

import Home from '../pages/Home'
import Error from '../pages/Error'
import AddBook from '../features/Books/AddBook'
import BooksView from '../features/Books/BooksView'
import Nav from '../layouts/Nav'
import EditBook from '../features/Books/EditBook'

const Index = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/add-book' element={<AddBook />} />
        <Route path='/show-books' element={<BooksView />} />
        <Route path='/edit-book' element={<EditBook />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index
