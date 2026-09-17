import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhatIDo from '@/components/WhatIDo'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="section-divider"></div>
        <About />
        <div className="section-divider"></div>
        <WhatIDo />
        <div className="section-divider"></div>
        <Projects />
        <div className="section-divider"></div>
        <Skills />
        <div className="section-divider"></div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}