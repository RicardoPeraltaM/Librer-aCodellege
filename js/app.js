

// Elementos input con información de libro Nuevo
const autor = document.getElementById('inputAutor')
const titulo =  document.getElementById('inputTitulo')
const tabla = document.getElementById('tbody')
const inputBuscar = document.getElementById('inputBuscar')

const patern = /^[a-zA-ZÁ-ÿ0-9\s]{3,20}$/;

const libro = new Libro()


function EventListener(){
    document.getElementById('btnAdd').addEventListener('click', PrepararLibro)
    tabla.addEventListener('click', Acciones)
    document.getElementById('btnVaciar').addEventListener('click', vaciarLibrería)
    document.getElementById('btnBuscar').addEventListener('click', BuscarLibro)
}

EventListener()
PrepararDom()

let ultimoId = Number(LocalStorageOperation.ultimoId())
ultimoId++

function PrepararLibro(){

    console.log(ultimoId)

    if((autor.value != '' && titulo.value != '') && (patern.test(autor.value) && patern.test(titulo.value))){
        // libro.agregar([autor.value, titulo.value])

        const infoLibro = {
            id: ultimoId,
            titulo: titulo.value.trim(),
            autor: autor.value.trim()
        }

        LocalStorageOperation.almacenarLibro(infoLibro)
        let tr = libro.agregar(infoLibro)
        // console.log(tr);
        tabla.appendChild(tr)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se agregó libro',
            showConfirmButton: false,
            timer: 1000
        })
        autor.value = ''
        titulo.value = ''
    }else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error',
            showConfirmButton: false,
            timer: 1000
        })
    }

}

function Acciones(event){

    // console.log(event.target.tagName);
    if(event.target.tagName === 'I' || event.target.tagName === 'BUTTON'){
        
        // Filtrar botones editar y eliminar
        if(event.target.className.includes('btn-outline-danger') || event.target.className.includes('fa-trash')){
            console.log('elimidado');
            libro.eliminar(event.target)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se eliminó libro',
                showConfirmButton: false,
                timer: 500
            })
        }
    
    }
    
}

function PrepararDom(){
    const librosLS = LocalStorageOperation.ObtenerLS()
    console.log(librosLS.length);
    for(let i = 0; i<librosLS.length; i++){
        console.log(librosLS[i]);
        // const instanciaLibro = new Libro()
        let tr = libro.agregar(librosLS[i])
        tabla.appendChild(tr)
    }
}

function vaciarLibrería(){
    console.log(tabla.firstChild)
    while(tabla.firstChild){
        tabla.firstChild.remove()
    }
    LocalStorageOperation.BorrarStorage()
}

function BuscarLibro(event){

    event.preventDefault()

    // Validar que el input tenga texto

    if(inputBuscar.value != ''){

        console.log(inputBuscar.value.toLowerCase())
        // resultado es la salida del método BuscarTitulo que se encuentra en la clase LocalStorageOperation
        let resultado = LocalStorageOperation.BuscarTitulo(inputBuscar.value.trim().toLowerCase())
        console.log(resultado);
        if(resultado != ''){
        // Cuando la búsqueda genera resultados se imprime una alerta con dichos resultados
            Swal.fire(
            'Búsqueda Exitosa',
            `El libro con título ${resultado.titulo} tiene el id ${resultado.id} y fue escrito por ${resultado.autor}`,
            'success'
          )
    //Cuando la búsqueda no genera resultados regrsa un '' y se imprime una alerta de error 
        }else{
            Swal.fire(
            'Sin resultados',
            `No existe un libro con titulo ${inputBuscar.value}`,
            'error'
          )

    }

    }

    
    inputBuscar.value = ''
    
}