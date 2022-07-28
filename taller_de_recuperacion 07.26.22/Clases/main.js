class Persona{
    constructor(miNombre, miEdad) {
        this.nomnbreCompleto = miNombre;
        this.edad = miEdad;
    } 

    saludar(){
        console.log(`Hola soy ${this.nombreCompleto}, tengo ${this.edad}`)
    }

}

const ucamper = new Persona();
ucamper.nombreCompleto = "Vicente Garcia"
ucamper.edad = 27
ucamper.saludar()






