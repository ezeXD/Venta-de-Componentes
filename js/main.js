/**
 * @challenge: Desafio N°12:jQuery: selectores y eventos
 *
 * @version: 1.0.1
 * @author: Zambanini Hugo Ezequiel
 * @fecha: 13/01/2021
 *
 * History:
 *  - v1.0.1 – jQuery: selectores y eventos
 *  - V2.0.1 - Se acomodo el HTML Y CSS. En JS se mejoro el codigo. Propuestas a futuro: *)Mejorar la forma de busqueda.
 *                                                                                       *)Agregar un boton compra y un buton limpiar abajo de los elementos del carrito.
 *                                                                                       *)Agregar un filtro que filtre por tipos de objetos y por precio. 
 *                                                                                       *)Agregar un lorem debajo de la imagen que represente las caracteristicas del objeto y que se puede habrir o cerrar dependiendo si el usuario las quiere ver o no.
 */


/*
Este programa va a simular que un usuario va a comprar electrodomesticos en una página web, en este caso computadoras. La idea es hacerlo con mas (celulares, tablet, parlantes, etc). 
Es un prototipo y se va a ir agregando/quitando cosas.
*/


/*Variables globales */
let cantidad1 = 1;  //Cantidad que hay del componente 1
let cantidad2 = 1;  
let cantidad3 = 1;
let aparecerTotal =0;
let componentes = ["computadora1", "computadora2", "computadora3"] // Los componentes que hay en la página.


//Trabajo con la imagen 1 de la pagina web.
$("#imagen_1").on('click',function(){
    
    
    const vec = sessionStorage.getItem('usuario').split(",");

    let auxprecio1 = document.getElementById("objeto_1");
    console.log(auxprecio1);
    let precio1 = auxprecio1.textContent;
    precio1 = parseInt(precio1);

    /**********************STORAGE***********************/
    console.log(vec);
    vec.push("computadora_1");
    console.log("Se agrego correctamente el elemento.");
    sessionStorage.setItem('usuario', vec);
    console.log(sessionStorage.getItem('usuario').split(","));

    /*********************AGREGO DOM*********************/

    if(cantidad1 == 1){
        $("table").append(`<tr class ="trAgregadoJs" id = "imagen1"> 
                                        <td class = "tdAgregadoJs">${cantidad1}</td> 
                                        <td class = "tdAgregadoJs">computadora 1</td>
                                        <td class = "tdAgregadoJs"> ${precio1} </td>
                                        <td class = "tdAgregadoJs"> ${cantidad1 * precio1}`);
        cantidad1 ++;
    }
    else{
        $("#imagen1").html(`<td class = "tdAgregadoJs">${cantidad1}</td> 
                                        <td class = "tdAgregadoJs">computadora 1</td>
                                        <td class = "tdAgregadoJs"> ${precio1} </td>
                                        <td class = "tdAgregadoJs" class ="as"> ${cantidad1 * precio1}`);
        cantidad1 ++;
    }

    SumaParcial();
});    


$("#imagen_2").on('click',function(){
    
    const vec = sessionStorage.getItem('usuario').split(",");

    let auxprecio = document.getElementById("objeto_2");
    console.log(auxprecio);
    let precio = auxprecio.textContent;
    precio = parseInt(precio);

    /**********************STORAGE***********************/
    console.log(vec);
    vec.push("computadora_2");
    console.log("Se agrego correctamente el elemento.");
    sessionStorage.setItem('usuario', vec);
    console.log(sessionStorage.getItem('usuario').split(","));

    /*********************AGREGO DOM*********************/

    if(cantidad2 == 1){
        $("table").append(`<tr class ="trAgregadoJs" id = "imagen2"> 
                                        <td class = "tdAgregadoJs">${cantidad2}</td> 
                                        <td class = "tdAgregadoJs">computadora 2</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs"> ${cantidad2 * precio}`);
        cantidad2 ++;
    }
    else{
        $("#imagen2").html(`<td class = "tdAgregadoJs">${cantidad2}</td> 
                                        <td class = "tdAgregadoJs">computadora 2</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs" class ="as"> ${cantidad2 * precio}`);
        cantidad2 ++;
    }

    SumaParcial();
});    


$("#imagen_3").on('click',function(){
    
    const vec = sessionStorage.getItem('usuario').split(",");

    let auxprecio = document.getElementById("objeto_3");
    console.log(auxprecio);
    let precio = auxprecio.textContent;
    precio = parseInt(precio);

    /**********************STORAGE***********************/
    console.log(vec);
    vec.push("computadora_3");
    console.log("Se agrego correctamente el elemento.");
    sessionStorage.setItem('usuario', vec);
    console.log(sessionStorage.getItem('usuario').split(","));

    /*********************AGREGO DOM*********************/

    if(cantidad3 == 1){
        $("table").append(`<tr class ="trAgregadoJs" id = "imagen3"> 
                                        <td class = "tdAgregadoJs">${cantidad3}</td> 
                                        <td class = "tdAgregadoJs">computadora 3</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs"> ${cantidad3 * precio}`);
        cantidad3 ++;
    }
    else{
        $("#imagen3").html(`<td class = "tdAgregadoJs">${cantidad3}</td> 
                                        <td class = "tdAgregadoJs">computadora 3</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs" class ="as"> ${cantidad3 * precio}`);
        cantidad3 ++;
    }

    SumaParcial();
});    


//Busco un componente de la lista (esta declarada global) y digo si se encuentra o no.
//En buscador.js esta la llamada de esta funcion.
//La variable buscador_buscar esta declarada en buscador.js y es una variable global.
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

//Calcula el precio de todos los objetos que compro el usuario e imprime el total en pantalla.
//precio1, precio2 y precio3 son variables globales y estan declaradas en el index.js
SumaParcial = () => {
    const vec = sessionStorage.getItem('usuario').split(",");
    let total = 0;
    console.log(vec);

    /***** */
    let auxprecio1 = document.getElementById("objeto_1");
    console.log(auxprecio1);
    let precio1 = auxprecio1.textContent;
    precio1 = parseInt(precio1);

    let auxprecio2 = document.getElementById("objeto_2");
    console.log(auxprecio2);
    let precio2 = auxprecio2.textContent;
    precio2 = parseInt(precio2);

     let auxprecio = document.getElementById("objeto_3");
    console.log(auxprecio);
    let precio3 = auxprecio.textContent;
    precio3 = parseInt(precio3);


    for (let i = 0; i < vec.length; i++) {

        if (vec[i] == "computadora_1")
            total = total + precio1; 

        if (vec[i] == "computadora_2")
            total = total + precio2; 

        if (vec[i] == "computadora_3")
            total = total + precio3; 
    }
    console.log("El total es: " + total);

    /*********************AGREGO DOM*********************/
    
    if(aparecerTotal == 0){
        $(".tabla").append(`<div class="unaSolaVes"><p>Total = $${total}</p></div>`);
        $(".unaSolaVes").css("text-align","center");
        $(".unaSolaVes").css("font-size","1.5em");
        $(".unaSolaVes").css("color","blue");
        aparecerTotal = 1;
        $("body").append(`<button id="> </button>`)
    }else{
        $(".unaSolaVes").html(`<p class ="unaSolaVes"> Total = $${total}`);
    }
}


//Inicio del codigo
sessionStorage.setItem('usuario', []);
