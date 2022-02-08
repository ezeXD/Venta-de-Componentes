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

let total = 0;
let aparecerTotal =0;

/*

let finalizarCompra = documetn.getElementById("finalizarCompra");
finalizarCompra.onclick =()=>{
    alert("adsf");
}
/*
$("#finalizarCompra").on('click',function(){
    alert("Adsf")
    $("body").append(`<article>
                            <div class="abonar">
                            <p>El tolal a pagar es: $${total}</p>  
                            </div> </article>`)

    $(".abonar").css({"background-color":"#08D85A",
                        "height": "150px",
                        "text-align":"center"})
});
*/

//Inicio del codigo
sessionStorage.setItem('usuario', []);
