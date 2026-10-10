import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Projects from "./pages/Projects"
import Tetris from "./pages/Tetris"
import Flappy_Bird from "./pages/Flappy_Bird"

function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/cv" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tetris" element={<Tetris />} />
          <Route path="/flappy_bird" element={<Flappy_Bird />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App