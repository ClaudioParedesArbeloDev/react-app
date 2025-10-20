import { useState, useEffect } from 'react'
import Contador from '../../components/contador/contador'   

function Home() {

    const [product, setProduct] = useState([])

    console.log(product)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            setProduct(data)
        });
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page</p>
            

            
            

        </div>
    )
}

export default Home