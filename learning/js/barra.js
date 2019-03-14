
var mivideo, reproducir, spielen, barra, progreso, maximo;
maximo = 600;

function comenzar(){
    mivideo = document.getElementById("mivideo");
    miaudio = document.getElementById("miaudio");
    reproducir = document.getElementById("reproducir");
    spielen = document.getElementById("play");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");

    reproducir.addEventListener("click",clicking, false);
    spielen.addEventListener("click",clickingb,false);

    barra.addEventListener("click",crawlv,false);
    barra.addEventListener("click",crawla,false);

    
}

function crawlv(posicion){
    if((mivideo.paused==false) && (mivideo.ended) == false){
        var ratonX = posicion.pageX-barra.offsetLeft;

        var nuevoT = ratonX*mivideo.duration/maximo;

        mivideo.currentTime=nuevoT;

        progreso.style.width=ratonX+"px";
    }

}

function crawla(posicion){

    if((miaudio.paused==false) && (miaudio.ended) == false){
        var ratonX = posicion.pageX-barra.offsetLeft;

        var nuevoT = ratonX*miaudio.duration/maximo;

        miaudio.currentTime=nuevoT;

        progreso.style.width=ratonX+"px";
    }
}

function clicking(){

    if((mivideo.paused==false) && (mivideo.ended ==false)){
        mivideo.pause();
        reproducir.innerHTML="Play";
    }

    else{
        mivideo.play();
        reproducir.innerHTML="Pause";

        estado;
        bucle=setInterval(estado,500);
    }

}

function clickingb(){

    if((miaudio.paused==false) && (miaudio.ended==false)){
        miaudio.pause();
        spielen.innerHTML="Play";
    }

    else{
        miaudio.play();
        spielen.innerHTML="Pause";

        estado;
        bucle=setInterval(estado,500);
    }

}

function estado(){
    if(mivideo.ended == false){
        var total = parseInt(mivideo.currentTime*maximo/mivideo.duration);
        progreso.style.width=total+"px";
    }
    if(miaudio.ended == false){
        var total1 = parseInt(miaudio.currentTime*maximo/miaudio.duration);
        progreso.style.width=total1+"px";
    }
}

window.addEventListener("load",comenzar,false);