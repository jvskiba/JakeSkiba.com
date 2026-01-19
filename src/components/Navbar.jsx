import { useNavigate, useLocation } from "react-router-dom"
import styles from './Navbar.module.css'; 

function Navbar() {
    const navigate = useNavigate()

  return (
    <div className={styles.header}>
        <img src="/jvs.png" alt='JvS' width={100} height={100}
                className={styles.logo}/>
        <div div className={styles.navList}>
            <button className={`${styles.button}`} onClick={() => navigate("/")}>Home</button>
            <button className={`${styles.button}`} onClick={() => navigate("/Resume")}>Resume</button>
            <button className={`${styles.button}`} onClick={() => navigate("/Projects")}>Projects</button>
        </div>
    </div>
  )
}

export default Navbar
