import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DiegoGoitia.Dev | Sempai & Developer',
  description: 'Portafolio de Diego Goitia - Desarrollador Backend especializado en Python y Rust, y Sempai de Karate.',
  keywords: 'Diego Goitia, Desarrollador, Rust, Python, Karate Sempai, Programación, Venezuela',
  openGraph: {
    title: 'DiegoGoitia.Dev | Sempai & Developer',
    description: 'Explora mis proyectos de software y mi trayectoria como artista marcial.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
      </head>
      <body className="bg-dark-900 text-white antialiased font-sans">
        {children}
      </body>
    </html>
  )
}