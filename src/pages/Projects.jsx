import { useNavigate } from "react-router-dom"
// Omit Navbar import if you are using the shared Layout route in App.jsx
import styles from "./Projects.module.css"

function Projects() {
  const navigate = useNavigate()

  // Project data array incorporating your telemetry work, games, and hardware
  const projectList = [
    {
      id: "telemetry",
      title: "Vehicle Data Logger & Live Telemetry Module",
      tag: "2025 - 2026",
      description:
        "ESP32-powered telemetry node handling over 75 CAN Bus and UART signals at sampling rates up to 500Hz. Features real-time telemetry over WiFi and LoRa alongside a custom Python desktop application for viewing telemetry, decoding binary logs, and sending commands.",
      actionText: "View on GitHub",
      actionUrl: "https://github.com/jvskiba/Basementleaderboard",
      isExternal: true,
    },
    {
      id: "leaderboard",
      title: "Basement Games Leaderboard/Scoreboard",
      tag: "2021 - 2022",
      description:
        "This program serves as a scoreboard for pingpong games, as well as a way to store and display the scores for other games such as pinball, pool, and airhockey. It can also calculate statistics for each player and game.",
      actionText: "View on GitHub",
      actionUrl: "https://github.com/jvskiba/FSAE_Data_Acquisition",
      isExternal: true,
    },
    {
      id: "tetris",
      title: "Tetris Arcade Clone",
      tag: "2014",
      description:
        "This program is fully playable version of tetris in the browser complete with accurate score system, upcoming tetro(Tetris block) preview, and pause system.",
      actionText: "Play Tetris",
      actionUrl: "/tetris",
      isExternal: false,
    },
    {
      id: "flappy_bird",
      title: "Flappy Bird Clone",
      tag: "2013",
      description:
        "This program is a fully playable version of Flappy Bird in the browser that includes support for two players, and an autonomous bot to compete against.",
      actionText: "Play Flappy Bird",
      actionUrl: "/flappy_bird",
      isExternal: false,
    },
  ]

  return (
    <>
      <main className={styles.container}>
        {/* Top Intro Section */}
        <section className={styles.header}>
          <h1>Projects</h1>
          <p>
            A collection of some of the random stuff I've done with my time on this earth.
          </p>
          <a
            href="https://github.com/jvskiba" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubBtn}
          >
            Visit My GitHub
          </a>
        </section>

        {/* Divider */}
        <hr className={styles.divider} />

        {/* Vertical Project List */}
        <section className={styles.projectStack}>
          {projectList.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <h2>{project.title}</h2>
                {project.tag && <span className={styles.tag}>{project.tag}</span>}
              </div>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.actionRow}>
                {project.isExternal ? (
                  <a
                    href={project.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtn}
                  >
                    {project.actionText} →
                  </a>
                ) : (
                  <button
                    onClick={() => navigate(project.actionUrl)}
                    className={styles.actionBtn}
                  >
                    {project.actionText} →
                  </button>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}

export default Projects