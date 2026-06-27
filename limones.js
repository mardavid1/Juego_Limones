let canvas=document.getElementById('areaJuego');
let cxt=canvas.getContext('2d');

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
let personajeX=canvas.width/2;


function iniciar(){
    dibujarSuelo();
    fibujarPersonaje();

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
function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
}



function limpiarCanva(){
    cxt.clearRect(0,0,canvas.width,canvas.height);
}


