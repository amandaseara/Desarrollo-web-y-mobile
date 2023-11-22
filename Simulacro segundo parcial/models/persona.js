class Persona {
    constructor(nombre, apellido, email, telefono, empresa, notas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.empresa = empresa;
        this.notas = notas;
    }

    asociarEmpresa(empresa) {
        this.empresa = empresa;
        empresa.agregarPersona(this);
    }
    
    desasociarEmpresa() {
        if (this.empresa) {
            this.empresa.eliminarPersona(this);
            this.empresa = null;
        }
    }
}

module.exports = Persona;