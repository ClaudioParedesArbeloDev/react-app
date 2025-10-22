import { useState, useEffect } from 'react'
  

function Home() {

    const [producto, setProducto] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                data.forEach(product => {
                    setProducto(product)
                })
                
                    
                    
            });
    }, [])

   console.log(producto)

    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page</p>
            
            <div>
                ${producto.title}
            </div>
            
            
            

        </div>
    )
}

export default Home