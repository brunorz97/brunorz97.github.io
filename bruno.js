/*
ADIVINADOR:
Poseo 10 intentos para adivinar un numero generado al azar
del 1 al 100.
Al escribir un número me avisara si el número que busco es mayor
o menor al numero ingresado.
*/


let $numeroDeIntentos = 10;
let numeroRandom;


document.querySelector("#intentos").textContent = $numeroDeIntentos;


const $botonAdivinar = document.querySelector("#adivinar");
const $botonGenerarNumero = document.querySelector("#generar-numero");


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function disminuirIntento(){
    $numeroDeIntentos = $numeroDeIntentos - 1;
    document.querySelector("#intentos").textContent = $numeroDeIntentos;
}

function ayudaParaGanar(numeroEscogido){
    if (numeroEscogido < numeroRandom){
        document.querySelector("#texto-resultado").textContent = `Tu numero es mayor que ${numeroEscogido}`;
    
    } else if (numeroEscogido > numeroRandom) {
        document.querySelector("#texto-resultado").textContent = `Tu numero es menor que ${numeroEscogido}`;

    }
}

$botonGenerarNumero.onclick = function (){
    numeroRandom = getRandomInt(1,101);
    
    
    
}


$botonAdivinar.onclick = function(){
    const $numeroElegido = document.querySelector("#numero");
    const numeroElegido = Number($numeroElegido.value);

    if ($numeroDeIntentos < 1){
        alert("Ya no tienes mas intentos, tendrás mejor suerte la proxima vez");
    }
    
    if(numeroElegido != numeroRandom){
        disminuirIntento();
        document.querySelector("#resultado").className = "";
        ayudaParaGanar(numeroElegido);

    } else if (numeroElegido === numeroRandom) {

        document.querySelector("#resultado").className = "";
        document.querySelector("#texto-resultado").innerText = `¡¡GANASTE!! El numero correcto era ${numeroElegido}`;
        
    }

    
}

