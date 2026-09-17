'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    icon: 'fa-solid fa-server',
    title: 'Backend Development',
    description: 'APIs robustas y escalables con Python y Rust. Django, Flask, y servicios de alto rendimiento.',
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Bases de Datos',
    description: 'Diseño y optimización de esquemas. SQLite, PostgreSQL, MySQL. Queries eficientes.',
  },
  {
    icon: 'fa-solid fa-microchip',
    title: 'Hardware & Embedded',
    description: 'Integración software-hardware. Sistemas de asistencia, captahuellas, IoT.',
  },
  {
    icon: 'fa-solid fa-terminal',
    title: 'CLI Tools',
    description: 'Herramientas de línea de comandos útiles. Scrapers, automatizaciones, utilidades.',
  },
]

export default function WhatIDo() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.service-card')
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
          Lo que hago
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card opacity-0 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors">
                <i className={`${service.icon} text-primary-dim text-lg`}></i>
              </div>
              <h3 className="text-white font-semibold text-[15px] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}