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


const arrays = [
    {
    id: 1, 
    name: "Claudio", 
    age: 20, 
    gender: "Male", 
    profession: "Developer", 
    city: "Bogota", 
    country: "Colombia", 
    email: "claudio@gmail.com"  
    },
    {
        id: 2, 
        name: "Claudio", 
        age: 20, 
        gender: "Male", 
        profession: "Developer", 
        city: "Bogota", 
        country: "Colombia", 
        email: "claudio@gmail.com"  
    },  
];

function saludo(nombre){
    const saludito = "hola " + nombre;
    console.log(saludito);
}

saludo("Claudio");

console.log(saludito);

const nombrecito = "Claudio";

console.log(nombrecito);