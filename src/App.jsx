import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ShowCoin from './Pages/ShowCoin'
import Compare from './Pages/Compare'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/show' element={<ShowCoin />}></Route>
      <Route path='/compare' element={<Compare />}></Route>
    </Routes>
  )
}

export default App
