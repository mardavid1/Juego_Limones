let canvas=document.getElementById('areaJuego');
let cxt=canvas.getContext('2d');

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
let personajeX = (canvas.width - ANCHO_PERSONAJE) / 2;

let limonX=canvas.width/2;
let limonY=5;
const ANCHO_LIMON=20;
const ALTO_LIMON=20; 

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();

}

function dibujarSuelo(){
    cxt.fillStyle='blue';
    cxt.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO); //parte final del canvas canvas.height

}

function dibujarPersonaje(){
    cxt.fillStyle='brown';
    cxt.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);

}

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla();

}
function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();

}
function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}



function limpiarCanva(){
    cxt.clearRect(0,0,canvas.width,canvas.height);
}
//Segunda parte
function dibujarLimon(){
    cxt.fillStyle='green';
    cxt.fillRect(limonX,limonY,ANCHO_LIMON,ALTO_LIMON);
}

function bajarLimon(){
    limonY=limonY+10;
    actualizarPantalla();

}


