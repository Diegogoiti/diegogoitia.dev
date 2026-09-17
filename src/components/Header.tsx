'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="text-primary font-mono font-semibold text-lg group-hover:text-white transition-colors duration-200">
            DiegoGoitia.Dev
          </span>
        </a>
        
        <nav className="flex items-center gap-5">
          <a
            href="https://github.com/Diegogoiti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors duration-200"
          >
            <i className="fa-brands fa-github text-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/diego_goitia_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors duration-200"
          >
            <i className="fa-brands fa-instagram text-lg"></i>
          </a>
          <a
            href="mailto:diegogoitiazx1@gmail.com"
            className="text-gray-500 hover:text-primary transition-colors duration-200"
          >
            <i className="fa-solid fa-envelope text-lg"></i>
          </a>
        </nav>
      </div>
    </header>
  )
}