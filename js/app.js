

// Elementos input con información de libro Nuevo
const autor = document.getElementById('inputAutor')
const titulo =  document.getElementById('inputTitulo')
const tabla = document.getElementById('tbody')

const patern = /^[a-zA-ZÁ-ÿ0-9\s]{3,20}$/;

const libro = new Libro()


function EventListener(){
    document.getElementById('btnAdd').addEventListener('click', PrepararLibro)
    tabla.addEventListener('click', Acciones)
}
EventListener()

function PrepararLibro(){

    if((autor.value != '' && titulo.value != '') && (patern.test(autor.value) && patern.test(titulo.value))){
        // libro.agregar([autor.value, titulo.value])
        let tr = libro.agregar([autor.value, titulo.value])
        console.log(tr);
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