import styles from "./Flappy_Bird.module.css"

function Flappy_Bird() {
  return (
    <>
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
