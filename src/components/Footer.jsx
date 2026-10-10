import { useNavigate } from "react-router-dom"
import styles from "./Footer.module.css"

function Footer() {
  const navigate = useNavigate()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Row 1: Logo, Name, and Social Links */}
        <div className={styles.topRow}>
          <div className={styles.brand} onClick={() => navigate("/")}>
            <img 
              src="/jvs_logo.png"
              alt="JVS Logo" 
              className={styles.logo} 
            />
            <span className={styles.name}>Jake Skiba</span>
          </div>

          <div className={styles.socials}>
            <a 
              href="https://github.com/jvskiba" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/jakeskiba1/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://www.instagram.com/jvskiba_photography/">
              Photography
            </a>
          </div>
        </div>

        {/* Row 2: Copyright Notice */}
        <div className={styles.bottomRow}>
          <p>© {new Date().getFullYear()} Jake Skiba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer