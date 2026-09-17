'use client'

import { useEffect, useRef } from 'react'

interface Project {
  titulo: string
  descripcion: string
  tags: string[]
  url: string
}

const projects: Project[] = [
  {
    titulo: 'BudoDB',
    descripcion: 'Sistema de gestión de estudiantes para dojo de artes marciales. CRUD completo con autenticación.',
    tags: ['Rust', 'SQLite', 'Dioxus'],
    url: 'https://github.com/Diegogoiti/BudoDB',
  },
  {
    titulo: 'WebScrapper Workana',
    descripcion: 'Scraper automatizado que analiza proyectos de Workana, extrayendo habilidades tecnológicas más demandadas.',
    tags: ['Python', 'BeautifulSoup', 'POO'],
    url: 'https://github.com/Diegogoiti/Mi-primer-WebScrapper',
  },
  {
    titulo: 'Control de Asistencia',
    descripcion: 'App de escritorio para controlar asistencia con lector de huellas Futronic FS88H. Reportes y auditoría.',
    tags: ['C#', 'MySQL', 'Hardware'],
    url: 'https://github.com/Diegogoiti/ControlAcceso',
  },
  {
    titulo: 'diegogoitia.dev',
    descripcion: 'Este portfolio. Next.js, TypeScript, Tailwind CSS. Deployed en Render.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    url: 'https://github.com/Diegogoiti/diegogoitia.dev',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up')
              }, index * 100)
            })
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
    <section ref={sectionRef} id="proyectos" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest text-center mb-12">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card opacity-0 group relative p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-[15px] text-gray-200 group-hover:text-white transition-colors">
                  {project.titulo}
                </h3>
                <i className="fa-solid fa-arrow-up-right-from-square text-[11px] text-gray-600 group-hover:text-primary-dim transition-colors mt-1"></i>
              </div>

              <p className="text-[13px] text-gray-500 leading-relaxed mb-4 group-hover:text-gray-400 transition-colors">
                {project.descripcion}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono text-primary-dim/60 bg-primary/5 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
