import { useState } from 'react'
import useReveal from './hooks/useReveal.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [projectFilter, setProjectFilter] = useState('all')
  useReveal()

  // Yeteneklerden gelen filtre: projeler bölümüne kaydır ve filtreyi uygula.
  const filterProjects = (tag) => {
    setProjectFilter(tag)
    document.getElementById('projeler')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills onFilter={filterProjects} />
        <Projects filter={projectFilter} onFilterChange={setProjectFilter} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
