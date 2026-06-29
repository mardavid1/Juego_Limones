function generarAleatorio(min, max) {
    let random = Math.random(); // Genera entre 0 y 1
    let numero = random * (max - min); // Genera entre 0 y el máximo
    let numeroEntero = parseInt(numero);

    numeroEntero = numeroEntero + min;
    return numeroEntero;
}

function mostrarEnSpan(idSpan,valor){
    let componente=document.getElementById(idSpan);
    componente.textContent=valor;
}