'use client'

import { useEffect, useRef } from 'react'

interface Skill {
  nombre: string
  icono: string
  nivel: number
}

const skills: Skill[] = [
  { nombre: 'Python', icono: 'fa-brands fa-python', nivel: 90 },
  { nombre: 'Rust', icono: 'fa-brands fa-rust', nivel: 75 },
  { nombre: 'C#', icono: 'devicon-csharp-plain', nivel: 70 },
  { nombre: 'SQL', icono: 'fa-solid fa-database', nivel: 80 },
  { nombre: 'Linux', icono: 'fa-brands fa-linux', nivel: 85 },
  { nombre: 'Git', icono: 'fa-brands fa-git-alt', nivel: 85 },
  { nombre: 'Networking', icono: 'fa-solid fa-network-wired', nivel: 65 },
  { nombre: 'Hardware', icono: 'fa-solid fa-microchip', nivel: 70 },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.skill-bar')
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-slide-up')
                const bar = item.querySelector('.bar-fill') as HTMLElement
                if (bar) {
                  bar.style.width = bar.dataset.width || '0%'
                }
              }, index * 80)
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
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest text-center mb-12">
          Stack & Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
          {skills.map((skill, index) => (
            <div key={index} className="skill-bar opacity-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <i className={`${skill.icono} text-gray-500 text-sm w-4`}></i>
                  <span className="text-gray-300 text-sm">{skill.nombre}</span>
                </div>
                <span className="text-gray-600 text-xs font-mono">{skill.nivel}%</span>
              </div>
              <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden">
                <div
                  className="bar-fill h-full bg-primary/40 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '0%' }}
                  data-width={`${skill.nivel}%`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}