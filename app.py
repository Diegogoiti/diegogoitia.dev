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
    return render_template("index.html", proyectos=proyectos_destacados)

if __name__ == '__main__': app.run(host='0.0.0.0', port=5000, debug=True)