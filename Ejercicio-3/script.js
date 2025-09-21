class Tarea {

    constructor(id,nombre,estado) {
        this.id = id;
        this.nombre = nombre;
        this.estado = estado;
    }

    toggleEstado() {
        this.estado = !this.estado;
    }
}

class GestorTareas {
    tareas = [];

    agregarTarea(titulo) {
        const nuevaTarea = new Tarea(this.tareas.length + 1, titulo, false);
        this.tareas.push(nuevaTarea);
    }

    listarTareas() {
        return this.tareas;
    }

    buscarPorTitulo(titulo) {
        return this.tareas.filter(tarea => tarea.nombre.includes(titulo));
    }

    listarCompletadas() {
        return this.tareas.filter(tarea => tarea.estado === true);
    }
}
const gestorTareas = new GestorTareas()

cargarTareas = () => { 
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            gestorTareas.agregarTarea("Tarea1")
            gestorTareas.agregarTarea("Tarea2")
            gestorTareas.agregarTarea("Tarea3")
            resolve(gestorTareas.listarTareas())
        }, 2000)
    })
    return promesa       
}

async function esperarTareas() {
    try{
        await cargarTareas()
        console.log("Tareas cargadas correctamente");
        console.log(gestorTareas.listarTareas());

        // Completo las 3 tareas para filtrar y mostrarlas completadas
        for(const tarea of gestorTareas.tareas){
            tarea.toggleEstado()
        }
        console.log(gestorTareas.listarCompletadas());
        

    
        
        
    }catch(err){
        console.error("Error en la peticion");
        
    }
}

esperarTareas()
