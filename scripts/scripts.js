const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input-tarea');
const botonEnter = document.querySelector('#enter');
const id = 0;

//funcion agregar tarea

function agregarTarea (tarea, id, realizado, eliminado){
    const elemento = `<li id="elemento">
                    <i id="${id}" data="${realizado}" class="fa-regular fa-circle-dot"></i>
                    <p class="text">${tarea}</p>
                    <i id="0" data="${eliminado}" class="fa-solid fa-trash"></i>
                    </li>`;

    lista.insertAdjacentHTML("afterbegin", elemento)
}

botonEnter.addEventListener('click', ()=>{
    const tarea = input.value;

    if(tarea) {
        agregarTarea(tarea, id, false, false);
    }
    input.value = '';
    id++;
})

//funcion agregar tarea con tecla enter

document.addEventListener('keyup', function(event){
    if(event.key == 'Enter'){
        const tarea = input.value;

        if(tarea) {
            agregarTarea(tarea, id, false, false);
        }
        input.value = "";
        id++;
    }
})