//Variables globales
//Este bloque va a decir si se encuentra o no un componente en la pagina.
let componentes = ["computadora 1", "computadora 2", "computadora 3", "tablet 1", "tablet 2","tablet 3", "celulares 1", "celulares 2", "celulares 3"] // Los componentes que hay en la página.
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


//Busco un componente de la lista (esta declarada global) y digo si se encuentra o no.
function buscar() {
    let bandera =0;
    for(let i=0; i< componentes.length; i++){
        if(buscador_buscar == componentes[i]){
            alert("El componente se encuentra.")
            bandera = 1;
        }
       
    }
    if(bandera === 0){
        alert("el componente NO se encuentra.")
    }
}