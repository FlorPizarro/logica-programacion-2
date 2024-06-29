//creo objeto titulo conecto atravez del DOM document

/* let parrafo= document.querySelector('p');
parrafo.innerHTML='Ingresa un numero del 1 al 10'; */

let numeroSecreto=generarNumeroSecreto();


function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario===numeroSecreto);
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento); 
    elementoHTML.innerHTML= texto;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1',"Juego del numero secreto actualizado 3");
asignarTextoElemento('p','Ingresa un numero del 1 al 10');