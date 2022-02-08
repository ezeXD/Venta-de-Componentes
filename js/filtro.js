//=========================Creación de Filtro====================================

$(".filtro").css({"background-color":"rgb(223, 223, 223)",
                        "height": "1200px",
                        "width":"36vh",
                        "margin-left": "28vh",
                        "text-align":"center"})
                        
$(".filtro").append(`<button id="filtro-todo">TODO </button>
                        <button id="filtro-comutadoras"> Computadoras </button>
                        <button id="filtro-tablet"> Tablet </button>
                        <button id="filtro-celulares"> Celulares </button> `);


//Filtro Computadoras
let banderaComputadoras=0;

let boton = document.getElementById("filtro-comutadoras");
boton.onclick=()=>{
    if(banderaComputadoras==0){
        $("#filtroTablet").hide();
        $("#filtroCelulares").hide();
        $("#filtroComputadoras").css({"margin-top":"-50vh"});
        $("#borrar-titulo").css({"display": "none"});
        $("#filtro-comutadoras").css({"background-color": "#ff5e00"});
        banderaComputadoras = 1;
    }else{
        $("#filtroTablet").show();
        $("#filtroCelulares").show();
        $("#borrar-titulo").show();
        $("#filtro-comutadoras").css({"background-color": "#ff7e00"});
        $("#filtroComputadoras").css({"margin-top":"0vh"});
        banderaComputadoras = 0;
        
    }

}
//Filtro Tablets
let banderaTablets=0;
let boton2 = document.getElementById("filtro-tablet");
boton2.onclick=()=>{
    if(banderaTablets==0){
        $("#filtroComputadoras").css({"display": "none"});
        $("#filtroCelulares").css({"display": "none"});
        $("#filtroTablet").css({"margin-top":"-50vh"});
        $("#borrar-titulo").css({"display": "none"});
        $("#filtro-tablet").css({"background-color": "#ff5e00"});
        banderaTablets = 1;
    }else{
        $("#filtroComputadoras").show();
        $("#filtroCelulares").show();
        $("#borrar-titulo").show();
        $("#filtro-tablet").css({"background-color": "#ff7e00"});
        $("#filtroComputadoras").css({"margin-top":"0vh"});
         $("#filtroTablet").css({"margin-top":"3vh"});
        $("#filtroCelulares").css({"margin-top":"3vh"});
        banderaTablets = 0;
    }
}

//Filtro Celulares
let banderaCelulares=0;
let boton3 = document.getElementById("filtro-celulares");
boton3.onclick=()=>{
    if(banderaTablets==0){
        $("#filtroComputadoras").css({"display": "none"});
        $("#filtroTablet").css({"display": "none"});
        $("#filtroCelulares").css({"margin-top":"-55vh"});
        $("#borrar-titulo").css({"display": "none"});
        $("#filtro-celulares").css({"background-color": "#ff5e00"});
        banderaTablets = 1;
    }else{
        $("#filtroComputadoras").show();
        $("#filtroTablet").show();
        $("#borrar-titulo").show();
        $("#filtro-celulares").css({"background-color": "#ff7e00"});
        $("#filtroComputadoras").css({"margin-top":"0vh"});
         $("#filtroTablet").css({"margin-top":"3vh"});
        $("#filtroCelulares").css({"margin-top":"3vh"});
        banderaTablets = 0;
    }
}

//Sin Filtro
//let BanderaTodo=0;
let boton4 = document.getElementById("filtro-todo");
boton4.onclick=()=>{
        $("#filtroComputadoras").show();
        $("#filtroTablet").show();
        $("#filtroCelulares").show();
        $("#borrar-titulo").show();
        $("#filtro-celulares").css({"background-color": "#ff7e00"});
        $("#filtro-tablet").css({"background-color": "#ff7e00"});
        $("#filtro-comutadoras").css({"background-color": "#ff7e00"});
        $("#filtroComputadoras").css({"margin-top":"0vh"});
        $("#filtroTablet").css({"margin-top":"3vh"});
        $("#filtroCelulares").css({"margin-top":"3vh"});
}