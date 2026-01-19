import Navbar from "../components/Navbar"
import { useNavigate} from "react-router-dom"

function Projects() {
    const navigate = useNavigate()

  return (
    <div>
        <Navbar />
      <h1>Jake Skiba</h1>
      <p>Learning, one project at a time.</p>
      <button onClick={() => navigate("/tetris")}>Tetris Clone</button>
      <button onClick={() => navigate("/flappy_bird")}>Flappy Bird Clone</button>
    </div>
  )
}

export default Projects