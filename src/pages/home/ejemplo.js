


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
        name: "Gianluca", 
        age: 20, 
        gender: "Male", 
        profession: "Developer", 
        city: "Bogota", 
        country: "Colombia", 
        email: "claudio@gmail.com"  
    },  
];





const nuevoArray =  arrays.map(elemento => elemento.name)

console.log(nuevoArray);