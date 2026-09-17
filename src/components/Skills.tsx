'use client'

import { useEffect, useRef } from 'react'

interface Category {
  titulo: string
  icono: string
  items: string[]
}

const categories: Category[] = [
  {
    titulo: 'Lenguajes',
    icono: 'fa-solid fa-code',
    items: ['Python', 'Rust', 'C#', 'SQL'],
  },
  {
    titulo: 'Infraestructura',
    icono: 'fa-solid fa-server',
    items: ['Linux', 'Git', 'Networking'],
  },
  {
    titulo: 'Hardware',
    icono: 'fa-solid fa-microchip',
    items: ['Reparación de PC', 'Captahuellas', 'Sistemas embebidos'],
  },
  {
    titulo: 'Frameworks',
    icono: 'fa-solid fa-cubes',
    items: ['Django', 'Dioxus', 'Flet'],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.skill-category')
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-slide-up')
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
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest text-center mb-12">
          Stack & Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="skill-category opacity-0 group relative p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-7 h-7 rounded-md bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors">
                    <i className={`${category.icono} text-primary-dim text-xs`}></i>
                  </div>
                  <h3 className="text-gray-300 text-sm font-medium">{category.titulo}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-[13px] text-gray-400 group-hover:text-gray-300 bg-white/[0.03] border border-white/[0.06] group-hover:border-white/[0.1] px-3 py-1.5 rounded-lg transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}