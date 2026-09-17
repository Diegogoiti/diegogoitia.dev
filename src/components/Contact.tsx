'use client'

import { useEffect, useRef } from 'react'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section ref={sectionRef} id="contacto" className="py-20 px-6 opacity-0">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative">
            <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">
              Contacto
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Trabajamos juntos?
            </h3>
            <p className="text-gray-400 text-[15px] mb-8 max-w-lg">
              Siempre abierto a nuevas oportunidades, colaboraciones 
              o simplemente charlar sobre tecnología.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:diegogoitiazx1@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary text-sm font-medium rounded-lg border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all duration-200"
              >
                <i className="fa-solid fa-envelope text-xs"></i>
                Email
              </a>
              <a
                href="https://github.com/Diegogoiti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] text-gray-400 text-sm font-medium rounded-lg border border-white/[0.08] hover:text-white hover:bg-white/[0.08] transition-all duration-200"
              >
                <i className="fa-brands fa-github text-xs"></i>
                GitHub
              </a>
              <a
                href="https://www.instagram.com/diego_goitia_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] text-gray-400 text-sm font-medium rounded-lg border border-white/[0.08] hover:text-white hover:bg-white/[0.08] transition-all duration-200"
              >
                <i className="fa-brands fa-instagram text-xs"></i>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}