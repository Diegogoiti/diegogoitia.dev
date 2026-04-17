from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    proyectos_destacados = [
        {
            'titulo': 'DYFIT Student Manager (Rust)',
            'descripcion': 'Gestión de estudiantes para dojo, optimizado con SQLite y seguridad de tipos.',
            'url': 'https://github.com/Diegogoiti/DYFIT-Student-Manager-dioxus'
        },
        {
            'titulo': 'Esta página :) (Flask + tailwind)',
            'descripcion': 'Es mi primera página web, seguiremos mejorando con el tiempo. ',
            'url': 'https://github.com/Diegogoiti/diegogoitia.dev'
        }
    ]
    
    skills = [
        {'nombre': 'Python (django, flask, flet)', 'icono': 'fa-brands fa-python'},
        {'nombre': 'Rust (dioxus, rustqlite)', 'icono': 'fa-brands fa-rust'},
        {'nombre': 'Bases de Datos', 'icono': 'fa-solid fa-database'},
        {'nombre': 'Hardware & Embedded', 'icono': 'fa-solid fa-microchip'},
        {'nombre': 'Networking', 'icono': 'fa-solid fa-network-wired'},
        {'nombre': 'Git', 'icono': 'fa-brands fa-git-alt'},
        {'nombre': 'linux', 'icono': 'fa-brands fa-linux'},
        {'nombre': 'HTML5', 'icono': 'fa-brands fa-html5'},
        
        
    ]
    return render_template("index.html", proyectos=proyectos_destacados, skills=skills)

if __name__ == '__main__': app.run(host='0.0.0.0', port=5000, debug=True)