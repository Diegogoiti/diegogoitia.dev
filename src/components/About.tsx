'use client'

import { useEffect, useRef } from 'react'

export default function About() {
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
    <section ref={sectionRef} className="py-20 px-6 opacity-0">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">
              Sobre mí
            </h2>
            <div className="space-y-4 text-gray-400 text-[15px] leading-relaxed">
              <p>
                Soy un desarrollador Backend autodidacta de Venezuela. Me gusta
                entender cómo funcionan las cosas a nivel profundo, desde el
                hardware hasta el software.
              </p>
              <p>
                Mi stack principal gira alrededor de <span className="text-primary-dim">Python</span> y <span className="text-primary-dim">Rust</span>,
                pero mi curiosidad me lleva a explorar siempre cosas nuevas.
                Creo en el código limpio, las soluciones simples y el aprendizaje continuo.
              </p>
              <p>
                Fuera de la pantalla, soy cinturón negro de Karate y técnicо en
                reparación de computadoras. Las disciplinas marciales me enseñaron
                paciencia, disciplina y el valor de practicar todos los días.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-2">
                <i className="fa-solid fa-location-dot text-primary-dim/70 text-sm"></i>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Ubicación</span>
              </div>
              <p className="text-gray-300 text-sm">Venezuela</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-2">
                <i className="fa-solid fa-language text-primary-dim/70 text-sm"></i>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Idiomas</span>
              </div>
              <p className="text-gray-300 text-sm">Español, Inglés</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-2">
                <i className="fa-solid fa-bolt text-primary-dim/70 text-sm"></i>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Intereses</span>
              </div>
              <p className="text-gray-300 text-sm">Karate, Hardware, Linux, Rust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
