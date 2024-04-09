import React from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import LayOut from './Layout/LayOut'
import HomePage from './Pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
  )
}

export default App
