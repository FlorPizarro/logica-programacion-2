//creo objeto titulo conecto atravez del DOM document

/* let parrafo= document.querySelector('p');
parrafo.innerHTML='Ingresa un numero del 1 al 10'; */

let numeroSecreto;
let intentos;
let listaDeNumeroSorteados=[];
let numeroMaximo=10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento); 
    elementoHTML.innerHTML= texto;
    return;
}


function generarNumeroSecreto(){
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumeroSorteados);
    if (listaDeNumeroSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Llegaste al numero maximo de numeros aleatorios posible')
    }
    else{
        if(listaDeNumeroSorteados.includes(numeroGenerado)){
            //con includes recorro la lista para ver si el numeroGenerado ya se encuentra en ella
            return generarNumeroSecreto(); //recursividad, sale de la función y vuelve a entrar
        }
        else{
            listaDeNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
   
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
    asignarTextoElemento('p',`Ingresa un numero del 1 al ${numeroMaximo}`);
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