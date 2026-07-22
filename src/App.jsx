import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar"
import HomePage from './pages/HomePage'
import Main from './components/Main'
import SavedPage from './pages/SavedPage'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(
    () => {
      return localStorage.getItem("theme") === "dark"
    }
  )
  const [savedWords, setSavedWords] = useState(() => {
    const stored = localStorage.getItem("savedWords")
    return stored ? JSON.parse(stored) : []
  })

  function toggleSave(word) {
    setSavedWords((prev) => {
      const saved = prev.some(sword => sword.word === word.word)

      const update = saved ? prev.filter(sword => sword.word !== word.word) : [...prev, word]

      localStorage.setItem("savedWords", JSON.stringify(update))
      return update
    })
  }
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    else {
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  function toggleTheme() {
    setDarkMode(prev => !prev)
  }
  return (
    <div>
      {/* <Navbar />
      <Main /> */}
      <BrowserRouter>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path='/' element={<HomePage savedWords={savedWords} toggleSave={toggleSave} />} />
          <Route path='/saved' element={<SavedPage savedWords={savedWords} toggleSave={toggleSave} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
