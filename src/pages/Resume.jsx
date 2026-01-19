import Navbar from "../components/Navbar"
import styles from "./Resume.module.css"

function Resume() {
  return (
    <>
      <Navbar />
      <main className={styles.resume}>
        <header className={styles.header}>
          <h1>Curriculum Vitae</h1>
        </header>

        <section className={styles.section}>
          <h2>Work Experience</h2>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3>UGA Challenge Course and Climbing Wall Staff</h3>
              <span>2023 - Present</span>
            </div>
            <p>
              Help participants develop interpersonal skills while stepping
              outside their comfort zones. Supervise climbing activities and
              maintain a safe, supportive environment.
            </p>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3>President | UGA Motorsports</h3>
              <span>2024 - Present</span>
            </div>
            <p>
              Lead multiple technical and business divisions to meet competition
              deadlines. Coordinate with faculty advisors and the college to
              secure funding, sponsorships, and organize events.
            </p>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3>Electrical Apprentice | Skiba Electric</h3>
              <span>2019 - Present</span>
            </div>
            <p>
              Installed electrical devices, fixtures, and controls. Ran wiring,
              diagnosed faults, and resolved short-circuit and wiring issues.
            </p>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3>DJ Services</h3>
              <span>2014 - Present</span>
            </div>
            <p>
              Started off DJ for friends and family at small parties, but have 
              expanded to doing school events, dances, and weddings.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Education</h2>
          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3>University of Georgia</h3>
              <span>2022 - Present</span>
            </div>
            <p>B.S. Computer Science, Business Minor, 3.96 gpa</p>
          </div>
          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3>North Springs High School</h3>
              <span>2018 - 2022</span>
            </div>
            <p>4.0 gpa, 11 ap classes earning 3s or greater</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Skills</h2>

          <div className={styles.skillsGrid}>
            <div className={styles.skillColumn}>
              <h3>Technical</h3>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>CAN & Vehicle Telemetry</li>
                <li>Data Analysis</li>
              </ul>
            </div>

            <div className={styles.skillColumn}>
              <h3>Leadership & Professional</h3>
              <ul>
                <li>Team Leadership</li>
                <li>Project Management</li>
                <li>Technical Documentation</li>
                <li>Sponsorship & Budgeting</li>
                <li>Cross-Team Coordination</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Resume
