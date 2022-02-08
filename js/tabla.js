let monstrar_Ocultar_Tabla =0;

$("#verTabla").on('click',function(){
    //Muestra el contenido de la tabla
    if(monstrar_Ocultar_Tabla == 0){
        $(".tabla").css({"display":"inline"});
        $("#ocultarTabla").css({"display":"inline"})

        //coloco filtro y componentes mas al medio
        $(".filtro").css({"margin-left": "2vh",});
        $("componentes").css({"margin-left":"0vh"});
        monstrar_Ocultar_Tabla =1;
    }

    //Oculta el contenido de la tabla
    else{
        $(".tabla").css({"display":"none"});
        $("ocultarTabla").css({"display":"none"});

        //coloco filtro y componentes a su lugar original
        $(".filtro").css({"margin-left": "28vh",});
        monstrar_Ocultar_Tabla=0;
    }
});

$("#ocultarTabla").on('click',function(){

    $(".tabla").css({"display":"none"});
    $("ocultarTabla").css({"display":"none"});

    //coloco filtro y componentes a su lugar original
    $(".filtro").css({"margin-left": "28vh",});
});

