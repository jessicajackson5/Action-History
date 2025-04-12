const randomIDStr = () => Math.random().toString(36).slice(2)

class Accion {
    id: number | string
    descripcion: string
    fecha: Date

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
        else {
            return
        }
    }
}

class AccionInicioSesion extends Accion {
    dispositivo_origen: string // Device session initiated on

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
    dispositivo_origen: string  // Device session closed on 
    tiempo_de_sesion: number
    inicio: AccionInicioSesion

    constructor(
        descripcion: string,
        fecha: Date, 
        dispositivo_origen: string,
        inicio: AccionInicioSesion
    ) {
        super(descripcion, fecha)
        this.dispositivo_origen = dispositivo_origen
        this.tiempo_de_sesion = fecha.getTime() - inicio.fecha.getTime()
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