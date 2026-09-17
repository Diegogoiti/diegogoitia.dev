'use client'

import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Desarrollador Backend'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={sectionRef} className="pt-32 pb-24 px-6 opacity-0 relative">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-primary/8 rounded-2xl blur-xl"></div>
            <img
              src="/img/perfil.jpg"
              alt="Diego Goitia"
              className="relative w-48 h-56 rounded-2xl border border-white/10 object-cover shadow-2xl"
            />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-dark-800 border border-white/10 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-terminal text-primary/70 text-xl"></i>
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <div className="mb-2">
              <span className="text-gray-600 font-mono text-xs uppercase tracking-widest">Hola, soy</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3 text-white tracking-tight">
              Diego Goitia
            </h1>
            <div className="mb-6 h-8">
              <span className="text-primary-dim font-mono text-lg">
                {displayText}
                <span className="animate-blink ml-0.5 text-primary">_</span>
              </span>
            </div>
            
            <div className="flex gap-3 justify-center md:justify-start mb-8">
              <a
                href="https://github.com/Diegogoiti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/diego_goitia_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="mailto:diegogoitiazx1@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-lg text-[15px] mb-8">
              Amante del código simple y eficiente. Cinturón negro de Karate 
              y Técnico en reparación de computadoras. Autodidacta, curioso 
              y siempre construyendo cosas.
            </p>

            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="#proyectos"
                className="px-5 py-2.5 bg-primary/10 text-primary text-sm font-medium rounded-lg border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all duration-200"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="px-5 py-2.5 bg-white/[0.03] text-gray-400 text-sm font-medium rounded-lg border border-white/[0.08] hover:text-white hover:bg-white/[0.08] transition-all duration-200"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}