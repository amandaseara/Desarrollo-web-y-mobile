class Empresa {
    constructor(nombre, sitioWeb, notas) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.notas = notas;
        this.personasAsociadas = [];
    }

    agregarPersona(persona) {
        this.personasAsociadas.push(persona);
    }

    eliminarPersona(nombre, apellido) {
        const index = this.personasAsociadas.findIndex((p) => p.nombre === nombre && p.apellido === apellido);
      
        if (index !== -1) {
          const personaEliminada = this.personasAsociadas.splice(index, 1)[0];
          personaEliminada.empresa = null;
          return { message: 'Persona desasociada y eliminada correctamente de la empresa' };
        }
      
        return { error: 'No se encontró la persona en la empresa' };
    }

    puedeEliminar() {
        return this.personasAsociadas.length === 0;
    }
      
}

module.exports = Empresa;
