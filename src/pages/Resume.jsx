import styles from "./Resume.module.css"

function Resume() {
  return (
    <>
      <main className={styles.resume}>
        <header className={styles.header}>
          <h1>Curriculum Vitae</h1>
        </header>

        {/* Education Section */}
        <section className={styles.section}>
          <h2>Education</h2>
          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <div>
                <h3>University of Georgia</h3>
                <span className={styles.subtext}>
                  Bachelor of Science in Computer Science (GPA: 3.96/4.0) • Business Minor
                </span>
              </div>
              <div className={styles.entryMeta}>
                <span>Athens, GA</span>
                <span>May 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.section}>
          <h2>Experience</h2>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <div>
                <h3>President</h3>
                <span className={styles.subtext}>UGA Motorsports</span>
              </div>
              <span>July 2023 - May 2026</span>
            </div>
            <ul>
              <li>Direct high level club initiatives and lead Champcar, FSAE Internal Combustion Engine, FSAE Electric Vehicle, and business development divisions (&gt;200 active members, ~700 sqft facility).</li>
              <li>Secured and managed ~$140,000 club budget to meet annual engineering advancement projections and steer the development team.</li>
              <li>Led the FSAE IC team to improve performance from 105th to 62nd to 38th against 120 other collegiate teams.</li>
              <li>Contribute 30 hours weekly to planning, engagement, recruitment, club advisor, and college-level meetings.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <div>
                <h3>Data Acquisition Technician</h3>
                <span className={styles.subtext}>Corso Pilota Ferrari | Scuderia de Adamich • USA</span>
              </div>
              <span>June 2023 - August 2026</span>
            </div>
            <ul>
              <li>Deploy and manage specialized data logging systems (Racelogic, Tobii) for a fleet of high-performance vehicles.</li>
              <li>Architect and troubleshoot localized network infrastructure to ensure seamless data transfer between vehicle telemetry and engineering workstations.</li>
              <li>Perform hardware-level diagnostics and rapid repair of complex electrical and IT system failures in a high-pressure environment.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <div>
                <h3>Electrical Apprentice</h3>
                <span className={styles.subtext}>Skiba Electric • Atlanta, GA</span>
              </div>
              <span>May 2019 - June 2026</span>
            </div>
            <ul>
              <li>Install electrical devices, fixtures, and controls. Run wiring and circuitry as well as troubleshoot and diagnose shorts/wiring issues.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <div>
                <h3>Electronics Lead</h3>
                <span className={styles.subtext}>UGA Motorsports</span>
              </div>
              <span>Sept 2022 - June 2024</span>
            </div>
            <ul>
              <li>Engineered and hand-built a complete vehicle wiring harness for the UGA23 vehicle, integrating complex sensor arrays and high-speed data buses from the ground up.</li>
              <li>Executed custom ECU calibration and tuning for a Yamaha R6 engine, optimizing fuel mapping and ignition timing to maximize power delivery and reliability.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <div>
                <h3>Lead Technician</h3>
                <span className={styles.subtext}>North Springs HS Theater</span>
              </div>
              <span>Aug 2018 - May 2022</span>
            </div>
            <ul>
              <li>Designed lighting and sound systems for main stage and black box shows.</li>
              <li>Taught incoming students and technicians system architecture and design theory.</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className={styles.section}>
          <h2>Projects</h2>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <h3>Vehicle Data Logger & Live Telemetry Module</h3>
              <span>2025 - 2026</span>
            </div>
            <ul>
              <li>Utilized an ESP32 to handle data logging from multiple CAN Bus, UART, and RS232 data sources along with live telemetry sending over WiFi and LoRa.</li>
              <li>Logs at a variable rate per signal, handling over 75 signals from 1 to 500Hz to a custom binary format.</li>
              <li>Built a custom Python application to display live values, send commands to the vehicle, and decode raw binary data logs.</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h2>Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillColumn}>
              <h3>Languages & Software</h3>
              <div className={styles.tags}>
                <span className={styles.tag}>Java</span>
                <span className={styles.tag}>C++</span>
                <span className={styles.tag}>JavaScript</span>
                <span className={styles.tag}>HTML</span>
                <span className={styles.tag}>Python</span>
                <span className={styles.tag}>MATLAB</span>
              </div>
            </div>

            <div className={styles.skillColumn}>
              <h3>Systems & Infrastructure</h3>
              <div className={styles.tags}>
                <span className={styles.tag}>Windows</span>
                <span className={styles.tag}>Batch</span>
                <span className={styles.tag}>UNIX Terminal</span>
                <span className={styles.tag}>Unraid Server Management</span>
              </div>
            </div>

            <div className={styles.skillColumn}>
              <h3>Hardware & Engineering</h3>
              <div className={styles.tags}>
                <span className={styles.tag}>Solidworks (Intermediate)</span>
                <span className={styles.tag}>TIG & MIG Welding</span>
                <span className={styles.tag}>American Sign Language (Intermediate)</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Resume