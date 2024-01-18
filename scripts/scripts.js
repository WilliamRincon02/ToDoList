const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input-tarea');
const botonEnter = document.querySelector('#enter');

//funcion agregar tarea

function agregarTarea (tarea){
    const elemento = `<li id="elemento">
                    <i id="0" data="realizado" class="fa-regular fa-circle-dot"></i>
                    <p class="text">${tarea}</p>
                    <i id="0" data="elimidado" class="fa-solid fa-trash"></i>
                    </li>`;

    lista.insertAdjacentHTML("afterbegin", elemento)
}

botonEnter.addEventListener('click', ()=>{
    const tarea = input.value;

    if(tarea) {
        agregarTarea(tarea);
    }
    input.value = '';
})

document.addEventListener('keyup', function(event){
    if(event.key == 'Enter'){
        const tarea = input.value;

        if(tarea) {
            agregarTarea(tarea);
        }
        input.value = "";
    }
})