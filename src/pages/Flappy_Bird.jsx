import Navbar from "../components/Navbar"
import styles from "./Flappy_Bird.module.css"

function Flappy_Bird() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <iframe
          src="/flappy_bird/index.html"
          title="Flappy Bird Clone"
          className={styles.gameFrame}
        />
      </main>
    </>
  )
}

export default Flappy_Bird
