//creo objeto titulo conecto atravez del DOM document

/* let parrafo= document.querySelector('p');
parrafo.innerHTML='Ingresa un numero del 1 al 10'; */

function intentoDeUsuario(){
    alert('Click desde el botón');
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento); 
    elementoHTML.innerHTML= texto;
}

asignarTextoElemento('h1',"Juego del numero secreto actualizado 3");
asignarTextoElemento('p','Ingresa un numero del 1 al 10');