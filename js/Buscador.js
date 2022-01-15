//Variables globales
let buscador_buscar;    //almacena la palabra para buscar (se la usa en el index.js)
let bandera1 = 0;   //es para que no se repita varias veces el mensaje si se preciona el boton buscar

function validarFormulario(e) {
    e.preventDefault();
    let ingresado = document.getElementById("busqueda").value;  
    if (ingresado.length < 3){
        if(bandera1 == 0){
            const nav= document.getElementById('nav1');
            const error = document.createElement('p');
            error.classList.add("mensajedeError");
            error.innerHTML = "Error al ingresar lo que anda buscando, por favor ingrese mas de 3 caracteres"
            nav.appendChild(error);
        
            bandera1 = 1;
        }
    }else {
        buscador_buscar = ingresado;
        buscar();
    }
}

const formulario = document.getElementById("formulario");
formulario.addEventListener ("submit", validarFormulario);