
function saludo(){
    alert("Hola!!!");
}

/*
function hola2(){
    alert("Hola 22222!!!");
}*/

//window.onload=byClass;
window.onload=ejecuta;


function ejecuta(){

    /*
    for(var i=0; i < 3; i++){
        document.getElementsByTagName("p")[i].onclick=saludo;
    }

    document.getElementsByTagName("p")[0].onclick=saludo;
    document.getElementById("importante").onclick=saludo;

    var z=document.getElementsByClassName("importante")[0].onclick=hola2;
    
    document.querySelector("#principal p:last-child").onclick=saludo;*/

    //var elementos = document.querySelectorAll("#principal p")[0].onclick=saludo;
    var elementos = document.querySelectorAll("#principal p, span");
    
    for(var i=0; i < elementos.length; i++){
        elementos[i].onclick=saludo;
    }
}

/*
function byClass(){
    var z=document.getElementsByClassName("importante")[0].onclick=hola2;
}*/