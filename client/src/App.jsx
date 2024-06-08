import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import ShowBooks from './pages/ShowBooks'

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/books/create' element={<AddBook></AddBook>}></Route>
    <Route path='/books/details/:id' element={<ShowBooks></ShowBooks>}></Route>
    <Route path='/books/edit/:id' element={<EditBook></EditBook>}></Route>
    <Route path='/books/delete/:id' element={<DeleteBook></DeleteBook>}></Route>
  </Routes>
  )
}

export default App
