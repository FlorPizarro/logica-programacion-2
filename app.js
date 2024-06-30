//creo objeto titulo conecto atravez del DOM document

/* let parrafo= document.querySelector('p');
parrafo.innerHTML='Ingresa un numero del 1 al 10'; */

let numeroSecreto=generarNumeroSecreto();
let intentos=1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento); 
    elementoHTML.innerHTML= texto;
    return;
}

asignarTextoElemento('h1',"Juego del numero secreto actualizado ");
asignarTextoElemento('p',"Ingresa un numero del 1 al 10");

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);

    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)?'vez':'veces'}`);
    }
    else{
        //el usuario no acerto
        if (numeroSecreto>numeroDeUsuario){
            asignarTextoElemento('p','El numero es mayor');
        }
        else{
            asignarTextoElemento('p','El numero es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value= '';
}

let botonVerificar = document.getElementById('botonVerificar');
botonVerificar.addEventListener('click', verificarIntento);