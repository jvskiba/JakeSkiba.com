import Navbar from "../components/Navbar"
import { useNavigate} from "react-router-dom"

function Projects() {
    const navigate = useNavigate()

  return (
    <div>
        <Navbar />
      <h1>Projects</h1>
      <p>Random projects that I've made over the years</p>
      <button onClick={() => navigate("/tetris")}>Tetris Clone</button>
      <button onClick={() => navigate("/flappy_bird")}>Flappy Bird Clone</button>
    </div>
  )
}

export default Projects