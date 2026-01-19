import Navbar from "../components/Navbar"
import styles from "./Tetris.module.css"

function Tetris() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <iframe
          src="/tetris/index.html"
          title="Tetris Game"
          className={styles.gameFrame}
        />
      </main>
    </>
  )
}

export default Tetris
