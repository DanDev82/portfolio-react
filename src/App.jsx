import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Contact from './components/Contact'

function App() {
const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Navbar />  
      <Home />
      <About /> 
      <Skills />
      <Work />
      <Contact />
      {/* dark mode */}
      <div className="fixed sm:top-[50%] top-[10%] left-0 p-2 bg-yellow-500 rounded-r-md rounded-br-md" onClick={() => setDarkMode(!darkMode)}>
        <BsFillMoonStarsFill className="text-white dark:text-[#0a192f]"/>
      </div>
    </div>
  )
}

export default App
