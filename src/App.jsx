import React from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import LayOut from './Layout/LayOut'
import HomePage from './Pages/HomePage'
import ShowCoin from './Pages/ShowCoin'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/show' element={<ShowCoin />}></Route>
    </Routes>
  )
}

export default App
