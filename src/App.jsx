import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar.jsx'
import Home from './pages/Home.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
