/* const ucamper = []

console.log(typeof ucamper) */


const curso = {
    nombre: 'Ucamp',
    tipo: 'fullstack',
    modulos: [
        { nombre: 'css', cursado: true },
        { nombre: 'javascript', cursado: true },
        { nombre: 'react', cursado: false }
 ],
    saludar: (nombre) => {
        alert(`Hola soy ${nombre}`)
    }
 }

console.log(curso)

function saludar()