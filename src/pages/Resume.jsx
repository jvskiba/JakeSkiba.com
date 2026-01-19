import Navbar from "../components/Navbar"

function Resume() {
  return (
    <main>
        <Navbar />
      <h1>Resume</h1>

      <iframe
        src="/resume.pdf"
        width="100%"
        height="800px"
        title="Resume"
      />
    </main>
  )
}

export default Resume
