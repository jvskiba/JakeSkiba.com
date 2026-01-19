import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Projects from "./pages/Projects"
import Tetris from "./pages/Tetris"
import Flappy_Bird from "./pages/Flappy_Bird"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cv" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tetris" element={<Tetris />} />
        <Route path="/flappy_bird" element={<Flappy_Bird />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
