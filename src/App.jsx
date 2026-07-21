import { useState } from 'react'
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar"
import HomePage from './pages/HomePage'
import Main from './components/Main'
import SavedPage from './pages/SavedPage'
import './App.css'

function App() {

  return (
    <div>
      {/* <Navbar />
      <Main /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/saved' element={<SavedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
