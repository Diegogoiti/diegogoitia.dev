export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-white font-semibold">Diego Goitia</span>
            <span className="text-gray-600 text-xs font-mono uppercase tracking-wider">
              Sempai & Developer
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Diegogoiti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-dim transition-colors"
            >
              <i className="fa-brands fa-github text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/diego_goitia_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-dim transition-colors"
            >
              <i className="fa-brands fa-instagram text-lg"></i>
            </a>
            <a
              href="mailto:diegogoitiazx1@gmail.com"
              className="text-gray-600 hover:text-primary-dim transition-colors"
            >
              <i className="fa-solid fa-envelope text-lg"></i>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-600 text-xs">
            <i className="fa-solid fa-code text-primary-dim/50"></i>
            <span className="uppercase tracking-wider">
              No hay sueño muy grande para un soñador inmenso
            </span>
          </div>

          <p className="text-[11px] text-gray-700 font-mono">
            © 2026 <span className="text-primary-dim/50">//</span> Next.js + TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}