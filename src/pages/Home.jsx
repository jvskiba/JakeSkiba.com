import { useNavigate } from "react-router-dom"
import styles from "./Home.module.css"

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <main className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Jake Skiba</h1>
          <p className={styles.subtitle}>
            A guy who enjoys making random things and an enjoyer of anything that moves.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn} onClick={() => navigate("/resume")}>
              Resume
            </button>
            <button className={styles.secondaryBtn} onClick={() => navigate("/projects")}>
              Explore my work
            </button>
          </div>
        </section>

        {/*
        <section className={styles.featureImageContainer} aria-label="Motorsports">
          <img
            src="/images/G26_FSAE.jpg"
            alt="Formula SAE race car"
            className={styles.featureImage}
          />
          <span className={styles.imageCaption}>
            UGA MOTORSPORTS / FORMULA SAE
          </span>
        </section>
        */}
      </main>
    </>
  )
}

export default Home