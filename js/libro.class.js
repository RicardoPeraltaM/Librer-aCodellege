class Libro{

// Propiedades
    id = 0
    autor = ''
    titulo = ''

    agregar(array){
        this.autor = array[0]
        this.titulo = array[1]
        this.id ++
        console.log(this.id, this.autor, this.titulo)

        let tr = document.createElement('tr')
        tr.innerHTML = `<th scope="row">${this.id}</th>
        <td>${this.titulo}</td>
        <td>${this.autor}</td>
        <td>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic example"
          >
            <button id="editar${this.id}" type="button" class="btn btn-outline-warning">
              <i class="far fa-edit"></i>
            </button>
            <button id="eliminar${this.id}" type="button" class="btn btn-outline-danger">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </td>`

        return tr
    }

    eliminar(element){
        // element sólo puede tomar 2 valores('I', 'BUTTON')
        if(element.tagName === 'I'){
            element.parentElement.parentElement.parentElement.parentElement.remove()
            
            
        }else if(element.tagName === 'BUTTON'){
            element.parentElement.parentElement.parentElement.remove()
        }
    }

}