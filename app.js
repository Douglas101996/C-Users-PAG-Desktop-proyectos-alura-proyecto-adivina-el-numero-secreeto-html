let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intento = 1;
let maxIntentos = 2;
console.log(numeroSecreto);
while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt('me indicas un numero entre 1 y 10 ');

console.log(numeroUsuario);
if(numeroUsuario == numeroSecreto){
    alert("acertaste el numero es :" +numeroUsuario );
    alert("lo hiciste en " +intento ,"veces");
}else{
    if(numeroUsuario > numeroSecreto){
        alert("el numero secreto es menor");
    }else{
        alert("el numero secreto es mayor");
    }
    intento++;
if(intento > maxIntentos){
    alert("llegaste al maximo de intentos ",+maxIntentos);
}
}

}


