// Create and Manage a History with Arrays and Objects in Typescript

const randomIDStr1 = () => Math.random().toString(36).slice(2)

class Accion1 {
    id: string
    descripcion: string
    fecha: string

    constructor(
        descripcion: string,
        fecha: string, 
    ) {
        this.id = randomIDStr1()
        this.descripcion = descripcion
        this.fecha = fecha
    }
}

class Historial {
    historial: Accion1[]

    constructor(
        historial: Accion1[] = []
    ) {
        this.historial = historial
    }
    // Agregar una nueva acción al historial
    agregar(descripcion: string): void {
        const nueva_accion: Accion1 = new Accion1(
            descripcion,
            new Date().toISOString()
    )
        this.historial.push(nueva_accion)
    }

    // Eliminar una accion del historial
    eliminar_accion(id: string): void{
        const index: number = this.historial.findIndex(accion => accion.id === id)
        if(index !== -1){
            this.historial.splice(index,1)
        }
        else console.log(`Accion con ID: ${id} no encontrado`)
    }

    // Mostrar la historia
    mostrar(): void{
        if(this.historial.length === 0){
            console.log("No hay acciones en el historial")
        }
        else this.historial.forEach(_i => {
            console.log(`${_i.id}, ${_i.descripcion}, ${_i.fecha}`)
        })
    }

    // Vaciar el historial
    eliminar_todo(): void{
        this.historial.length = 0
    }

}

const historial = new Historial();

console.log("\nAgregar 3 acciones:");
historial.agregar( "User logged in");
historial.agregar("User updated profile");
historial.agregar("User logged out");
historial.mostrar()

/* Outdate test. Need to get the random string ID to eliminate it
console.log("\nEliminar accion con ID 1:");
historial.eliminar_accion(1)
historial.mostrar()*/

console.log("\nEliminar todo el historial:");
historial.eliminar_todo()
historial.mostrar()