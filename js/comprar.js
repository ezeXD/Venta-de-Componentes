//Realiza la compra al cliquear en un elemento

//Variables globales
let cantidad1 = 1;  //Cantidad que hay del componente 1
let cantidad2 = 1;  
let cantidad3 = 1;
let cantidad4 = 1;
let cantidad5 = 1;
let cantidad6 = 1;
let cantidad7 = 1;
let cantidad8 = 1;
let cantidad9 = 1;

//Trabajo con la imagen 1 de la pagina web.
$("#imagen_1").on('click',function(){    
    const vec = sessionStorage.getItem('usuario').split(",");
    let auxprecio1 = document.getElementById("objeto_1");
    console.log(auxprecio1);
    let precio1 = auxprecio1.textContent;
    precio1 = parseInt(precio1);
    //alert("el componente se agrego al changuito correctamente");

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


//Trabajo con la imagen 2 de la pagina web.
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


//Trabajo con la imagen 3 de la pagina web.
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


//Trabajo con la imagen 4 de la pagina web.
$("#imagen_4").on('click',function(){
    
    const vec = sessionStorage.getItem('usuario').split(",");
    let auxprecio = document.getElementById("objeto_4");
    console.log(auxprecio);
    let precio = auxprecio.textContent;
    precio = parseInt(precio);

    /**********************STORAGE***********************/
    console.log(vec);
    vec.push("tablet_1");
    console.log("Se agrego correctamente el elemento.");
    sessionStorage.setItem('usuario', vec);
    console.log(sessionStorage.getItem('usuario').split(","));

    /*********************AGREGO DOM*********************/

    if(cantidad4 == 1){
        $("table").append(`<tr class ="trAgregadoJs" id = "imagen4"> 
                                        <td class = "tdAgregadoJs">${cantidad4}</td> 
                                        <td class = "tdAgregadoJs">tablet 1</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs"> ${cantidad4 * precio}`);
        cantidad4 ++;
    }
    else{
        $("#imagen4").html(`<td class = "tdAgregadoJs">${cantidad4}</td> 
                                        <td class = "tdAgregadoJs">tablet 1</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs" class ="as"> ${cantidad4 * precio}`);
        cantidad4 ++;
    }

    SumaParcial();
});    

//Trabajo con la imagen 5 de la pagina web.
$("#imagen_5").on('click',function(){
    
    const vec = sessionStorage.getItem('usuario').split(",");
    let auxprecio = document.getElementById("objeto_5");
    console.log(auxprecio);
    let precio = auxprecio.textContent;
    precio = parseInt(precio);
    /**********************STORAGE***********************/
    console.log(vec);
    vec.push("tablet_2");
    console.log("Se agrego correctamente el elemento.");
    sessionStorage.setItem('usuario', vec);
    console.log(sessionStorage.getItem('usuario').split(","));

    /*********************AGREGO DOM*********************/

    if(cantidad5 == 1){
        $("table").append(`<tr class ="trAgregadoJs" id = "imagen5"> 
                                        <td class = "tdAgregadoJs">${cantidad5}</td> 
                                        <td class = "tdAgregadoJs">tablet 2</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs"> ${cantidad5 * precio}`);
                                       
        cantidad5 ++;
    }
    else{
        $("#imagen5").html(`<td class = "tdAgregadoJs">${cantidad5}</td> 
                                        <td class = "tdAgregadoJs">tablet 2</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs" class ="as"> ${cantidad5 * precio}`);
        cantidad5 ++;
    }

    SumaParcial();
});    


//Trabajo con la imagen 6 de la pagina web.
$("#imagen_6").on('click',function(){
    
    const vec = sessionStorage.getItem('usuario').split(",");
    let auxprecio = document.getElementById("objeto_6");
    console.log(auxprecio);
    let precio = auxprecio.textContent;
    precio = parseInt(precio);
    /**********************STORAGE***********************/
    console.log(vec);
    vec.push("tablet_3");
    console.log("Se agrego correctamente el elemento.");
    sessionStorage.setItem('usuario', vec);
    console.log(sessionStorage.getItem('usuario').split(","));

    /*********************AGREGO DOM*********************/

    if(cantidad6 == 1){
        $("table").append(`<tr class ="trAgregadoJs" id = "imagen6"> 
                                        <td class = "tdAgregadoJs">${cantidad6}</td> 
                                        <td class = "tdAgregadoJs">tablet 3</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs"> ${cantidad6 * precio}`);
                                       
        cantidad6 ++;
    }
    else{
        $("#imagen6").html(`<td class = "tdAgregadoJs">${cantidad6}</td> 
                                        <td class = "tdAgregadoJs">tablet 3</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs" class ="as"> ${cantidad6 * precio}`);
        cantidad6 ++;
    }

    SumaParcial();
});    

//Trabajo con la imagen 7 de la pagina web.
$("#imagen_7").on('click',function(){
    
    const vec = sessionStorage.getItem('usuario').split(",");
    let auxprecio = document.getElementById("objeto_7");
    console.log(auxprecio);
    let precio = auxprecio.textContent;
    precio = parseInt(precio);
    /**********************STORAGE***********************/
    console.log(vec);
    vec.push("celular_1");
    console.log("Se agrego correctamente el elemento.");
    sessionStorage.setItem('usuario', vec);
    console.log(sessionStorage.getItem('usuario').split(","));

    /*********************AGREGO DOM*********************/

    if(cantidad7 == 1){
        $("table").append(`<tr class ="trAgregadoJs" id = "imagen7"> 
                                        <td class = "tdAgregadoJs">${cantidad7}</td> 
                                        <td class = "tdAgregadoJs">celular 1</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs"> ${cantidad7 * precio}`);
                                       
        cantidad7 ++;
    }
    else{
        $("#imagen7").html(`<td class = "tdAgregadoJs">${cantidad7}</td> 
                                        <td class = "tdAgregadoJs">celular 1</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs" class ="as"> ${cantidad7 * precio}`);
        cantidad7 ++;
    }

    SumaParcial();
});    

//Trabajo con la imagen 8 de la pagina web.
$("#imagen_8").on('click',function(){
    
    const vec = sessionStorage.getItem('usuario').split(",");
    let auxprecio = document.getElementById("objeto_8");
    console.log(auxprecio);
    let precio = auxprecio.textContent;
    precio = parseInt(precio);
    /**********************STORAGE***********************/
    console.log(vec);
    vec.push("celular_2");
    console.log("Se agrego correctamente el elemento.");
    sessionStorage.setItem('usuario', vec);
    console.log(sessionStorage.getItem('usuario').split(","));

    /*********************AGREGO DOM*********************/

    if(cantidad8 == 1){
        $("table").append(`<tr class ="trAgregadoJs" id = "imagen8"> 
                                        <td class = "tdAgregadoJs">${cantidad8}</td> 
                                        <td class = "tdAgregadoJs">celular 2</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs"> ${cantidad8 * precio}`);
                                       
        cantidad8 ++;
    }
    else{
        $("#imagen8").html(`<td class = "tdAgregadoJs">${cantidad8}</td> 
                                        <td class = "tdAgregadoJs">celular 2</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs" class ="as"> ${cantidad8 * precio}`);
        cantidad8 ++;
    }

    SumaParcial();
});    


//Trabajo con la imagen 9 de la pagina web.
$("#imagen_9").on('click',function(){
    
    const vec = sessionStorage.getItem('usuario').split(",");
    let auxprecio = document.getElementById("objeto_9");
    console.log(auxprecio);
    let precio = auxprecio.textContent;
    precio = parseInt(precio);
    /**********************STORAGE***********************/
    console.log(vec);
    vec.push("celular_3");
    console.log("Se agrego correctamente el elemento.");
    sessionStorage.setItem('usuario', vec);
    console.log(sessionStorage.getItem('usuario').split(","));

    /*********************AGREGO DOM*********************/

    if(cantidad9 == 1){
        $("table").append(`<tr class ="trAgregadoJs" id = "imagen9"> 
                                        <td class = "tdAgregadoJs">${cantidad9}</td> 
                                        <td class = "tdAgregadoJs">celular 3</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs"> ${cantidad9 * precio}`);
                                       
        cantidad9 ++;
    }
    else{
        $("#imagen9").html(`<td class = "tdAgregadoJs">${cantidad9}</td> 
                                        <td class = "tdAgregadoJs">celular 3</td>
                                        <td class = "tdAgregadoJs"> ${precio} </td>
                                        <td class = "tdAgregadoJs" class ="as"> ${cantidad9 * precio}`);
        cantidad9 ++;
    }

    SumaParcial();
});    










//Calcula el precio de todos los objetos que compro el usuario e imprime el total en pantalla.
//precio1, precio2 y precio3 son variables globales y estan declaradas en el index.js
SumaParcial = () => {
    const vec = sessionStorage.getItem('usuario').split(",");
    
    console.log(vec);
    total=0;
  
    let auxprecio1 = document.getElementById("objeto_1");
    console.log(auxprecio1);
    let precio1 = auxprecio1.textContent;
    precio1 = parseInt(precio1);

    let auxprecio2 = document.getElementById("objeto_2");
    console.log(auxprecio2);
    let precio2 = auxprecio2.textContent;
    precio2 = parseInt(precio2);

    let auxprecio3 = document.getElementById("objeto_3");
    console.log(auxprecio3);
    let precio3 = auxprecio3.textContent;
    precio3 = parseInt(precio3);

    let auxprecio4 = document.getElementById("objeto_4");
    console.log(auxprecio4);
    let precio4 = auxprecio4.textContent;
    precio4 = parseInt(precio4);
    
    let auxprecio5 = document.getElementById("objeto_5");
    console.log(auxprecio5);
    let precio5 = auxprecio5.textContent;
    precio5 = parseInt(precio5);

    let auxprecio6 = document.getElementById("objeto_6");
    console.log(auxprecio6);
    let precio6 = auxprecio6.textContent;
    precio6 = parseInt(precio6);

    let auxprecio7 = document.getElementById("objeto_7");
    console.log(auxprecio7);
    let precio7 = auxprecio7.textContent;
    precio7 = parseInt(precio7);

    let auxprecio8 = document.getElementById("objeto_8");
    console.log(auxprecio8);
    let precio8 = auxprecio8.textContent;
    precio8 = parseInt(precio8);

    let auxprecio9 = document.getElementById("objeto_9");
    console.log(auxprecio9);
    let precio9 = auxprecio9.textContent;
    precio9 = parseInt(precio9);


    for (let i = 0; i < vec.length; i++) {

        if (vec[i] == "computadora_1")
            total = total + precio1; 
            console.log(total)

        if (vec[i] == "computadora_2")
            total = total + precio2; 

        if (vec[i] == "computadora_3")
            total = total + precio3; 

        if(vec[i]=="tablet_1")
            total=total+precio4;
        
        if(vec[i]=="tablet_2")
            total=total+precio5;
        
        if(vec[i]=="tablet_3")
            total=total+precio6;

        if(vec[i]=="celular_1")
            total=total+precio7;
        
        if(vec[i]=="celular_2")
            total=total+precio8;
        
        if(vec[i]=="celular_3")
            total=total+precio9;
    }
    console.log("El total es: " + total);

    /*********************AGREGO DOM*********************/
    
    if(aparecerTotal == 0){
        $(".total").append(`<div class="unaSolaVes"><p>Total = $${total}</p></div>`);
        $(".unaSolaVes").css({"text-align":"center",
                                "font-size": "1.5em",
                                "color": "blue",
                                "display": "inline"});
        aparecerTotal = 1;

    }else{
        $(".unaSolaVes").html(`<p class ="unaSolaVes"> Total = $${total}`);
    }

    //muestra el boton finalizar compra.
    $(".finalizarCompra").show();
}

