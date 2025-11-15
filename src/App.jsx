import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Certifications from "./components/Certifications"
import Research from "./components/Research"
import Contact from "./components/Contact"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Research />
      <Contact />
    </div>
  )
}

export default App
