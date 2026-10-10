import { useNavigate } from "react-router-dom"
import styles from './Navbar.module.css'

function Navbar() {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.brand} onClick={() => navigate("/")}>
          Jake Skiba
        </div>
        <div className={styles.navButtons}>
          <button className={styles.button} onClick={() => navigate("/")}>
            Home
          </button>
          <button className={styles.button} onClick={() => navigate("/resume")}>
            CV
          </button>
          <button className={styles.button} onClick={() => navigate("/projects")}>
            Projects
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar