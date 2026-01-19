import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link>{" | "}
      <Link to="/projects">Projects</Link>{" | "}
      <Link to="/resume">Resume</Link>
    </nav>
  )
}

export default Navbar
