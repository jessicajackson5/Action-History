const randomIDStr = () => Math.random().toString(36).slice(2)

class Accion {
    id: string
    descripcion: string
    protected fecha: Date

    constructor(
        descripcion: string,
        fecha: Date, 
    ) {
        this.id = randomIDStr()
        this.descripcion = descripcion
        this.fecha = fecha
    }
    // Mostrar la historia
    mostrarDetalle(): void{
        if(this.descripcion.trim() !== ""){
            console.log(`id: ${this.id}, descripcion: ${this.descripcion}, fecha: ${this.fecha}`)
        }
    }
}

class AccionInicioSesion extends Accion {
    private dispositivo_origen: string // Device session initiated on

    constructor(
        descripcion: string,
        fecha: Date, 
        dispositivo_origen: string
    ) {
        super(descripcion, fecha)
        this.dispositivo_origen = dispositivo_origen
    }
    mostrarDetalle(): void{
        if(this.descripcion.trim() !== ""){
            console.log(`id: ${this.id}, descripcion: ${this.descripcion}, fecha: ${this.fecha}, dispositivo_origen: ${this.dispositivo_origen}`)
        }
        else {
            return
        }
    }
}

class AccionCierreSesion extends Accion {
    private dispositivo_origen: string  // Device session closed on 
    tiempo_de_sesion: number // Session duration in minutes
    inicio:  AccionInicioSesion

    constructor(
        descripcion: string,
        fecha: Date, 
        dispositivo_origen: string,
        inicio: AccionInicioSesion
    ) {
        super(descripcion, fecha)
        this.dispositivo_origen = dispositivo_origen
        this.inicio = inicio
        this.tiempo_de_sesion = Math.round(fecha.getTime() - inicio['fecha'].getTime())/(60*1000)
    }
    mostrarDetalle(): void{
        if(this.descripcion.trim() !== ""){
            console.log(`id: ${this.id}, descripcion: ${this.descripcion}, fecha: ${this.fecha}, tiempo_de_sesion: ${this.tiempo_de_sesion}, dispositivo_origen: ${this.dispositivo_origen}`)
        }
        else {
            return
        }
    }
}

/* Test code */
const inicio = new AccionInicioSesion("Session started", new Date("2025-04-12T09:00:00"), "Laptop")
inicio.mostrarDetalle()

const cierre = new AccionCierreSesion("Session ended", new Date("2025-04-12T11:15:00"), "Laptop", inicio)
cierre.mostrarDetalle()