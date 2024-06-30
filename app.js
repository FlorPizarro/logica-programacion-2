//creo objeto titulo conecto atravez del DOM document

/* let parrafo= document.querySelector('p');
parrafo.innerHTML='Ingresa un numero del 1 al 10'; */

let numeroSecreto;
let intentos;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento); 
    elementoHTML.innerHTML= texto;
    return;
}


function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //el usuario no acerto
        if (numeroSecreto<numeroDeUsuario){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }

        limpiarCaja();
    }

    intentos++;
    console.log(intentos);

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}
function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del numero secreto actualizado ");
    asignarTextoElemento('p',"Ingresa un numero del 1 al 10");
    intentos=1;
    numeroSecreto=generarNumeroSecreto();
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();
/* let botonVerificar = document.getElementById('botonVerificar');
botonVerificar.addEventListener('click', verificarIntento); */