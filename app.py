from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    proyectos_destacados = [
        {
            "titulo": "BudoDB (Rust)",
            "descripcion": "Gestión de estudiantes para dojo, optimizado con SQLite y seguridad de tipos.",
            "url": "https://github.com/Diegogoiti/BudoDB",
        },
        {
            "titulo": "Esta página :) (Flask + tailwind)",
            "descripcion": "Es mi primera página web, seguiremos mejorando con el tiempo. ",
            "url": "https://github.com/Diegogoiti/diegogoitia.dev",
        },
        {
            "titulo": "Mi Primer WebScrapper (Python + BeautifulSoup)",
            "descripcion": "Scraper automatizado (POO) que analiza proyectos de Workana, extrayendo y ordenando las habilidades tecnológicas más demandadas mediante parsing de JSON interno.",
            "url": "https://github.com/Diegogoiti/Mi-primer-WebScrapper",
        },
        {
            "titulo": "Control de Asistencia por capta huellas (C# + Mysql)",
            "descripcion": "Aplicación de escritorio desarrollada para controlar y reportar la asistencia mediante un captahuellas futronic fs88h",
            "url": "https://github.com/Diegogoiti/ControlAcceso",
        },
    ]

    skills = [
        {"nombre": "Python (django, flask, flet)", "icono": "fa-brands fa-python"},
        {"nombre": "Rust (dioxus, rustqlite)", "icono": "fa-brands fa-rust"},
        {"nombre": "Bases de Datos", "icono": "fa-solid fa-database"},
        {"nombre": "Hardware & Embedded", "icono": "fa-solid fa-microchip"},
        {"nombre": "Networking", "icono": "fa-solid fa-network-wired"},
        {"nombre": "Git", "icono": "fa-brands fa-git-alt"},
        {"nombre": "linux", "icono": "fa-brands fa-linux"},
        {"nombre": "C#", "icono": "devicon-csharp-plain"},
    ]
    return render_template("index.html", proyectos=proyectos_destacados, skills=skills)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
