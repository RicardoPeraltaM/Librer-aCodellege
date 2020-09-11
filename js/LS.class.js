class LocalStorageOperation{

    static almacenarLibro(infoLibro){
        // console.log(infoLibro);
        let arrayLibros = this.ObtenerLS()
        arrayLibros.push(infoLibro)
        // console.log(arrayLibros)
        localStorage.setItem('Libros', JSON.stringify(arrayLibros))
        
    }

    static ObtenerLS(){
        if(localStorage.getItem('Libros') === null){
            // console.log('Vacío')
            return []
        }else{
            // console.log('Si hay libros');
            return JSON.parse(localStorage.getItem('Libros'))
        }
    }

    static BorrarStorage(){
        localStorage.clear()
    }

    static BorrarLibro(idLibro){
        // console.log(idLibro)
        let arrayLibros = this.ObtenerLS()
        console.log(arrayLibros);
        let arregloNuevo = []

        for(let i = 0; i<arrayLibros.length; i++){
            if(idLibro != arrayLibros[i].id) arregloNuevo.push(arrayLibros[i])
        }
        console.log(arregloNuevo)
        localStorage.setItem('Libros', JSON.stringify(arregloNuevo))
    }

    static ultimoId(){
        let arrayLibros = this.ObtenerLS()
        if(arrayLibros == 0) return 0
        return (arrayLibros[arrayLibros.length -1].id)
    }

    static BuscarTitulo(titulo){
        // titulo Viene de app.js y es el valor de un input
        // para nuestro método, titulo será nuestro parámetro de Búsuqeda
        console.log(titulo);
        let arrayLibros = this.ObtenerLS()

        let resultado = ''

        // Iteramos nuestro array de Libros mediante un ciclo
        // Ponemos i< arrayLibros.length para evitar una vuelta de mas en el ciclo
        for(let i = 0; i < arrayLibros.length; i++){
            if(arrayLibros[i].titulo.toLowerCase() == titulo){
                resultado = arrayLibros[i];
            }
        }return resultado

    }
}  