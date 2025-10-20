const contador = 20

if(contador > 10){
    switch(contador){
        case 20:
            console.log("El contador es igual a 20")
            break;
        case 10:
            console.log("El contador es mayor a 10")
            break;
        default:
            console.log("El contador es menor a 10")
            break;
    }
}else{
    console.log("El contador es menor a 10")
}

const btn = document.querySelector('button')

btn.onclick = function(){
    console.log("Hola")
}