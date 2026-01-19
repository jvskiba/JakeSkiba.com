import { useNavigate, useLocation } from "react-router-dom"
import styles from './Navbar.module.css'; 

function Navbar() {
    const navigate = useNavigate()

  return (
    <div className={styles.header}>
        <div div className={styles.navList}>
            <button className={`${styles.button}`} onClick={() => navigate("/")}>Home</button>
            <button className={`${styles.button}`} onClick={() => navigate("/CV")}>CV</button>
            <button className={`${styles.button}`} onClick={() => navigate("/Projects")}>Projects</button>
        </div>
    </div>
  )
}

export default Navbar
