import { useState, useEffect } from 'react';


import './home.css';

function Home() {
    const [productos, setProductos] = useState([]);

    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProductos(datos); 
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
            });
    }, []);

   

    return (
        <div className='home'>
            <h1 id='aca'>Tienda</h1>
            <div className='products'>
                {productos.map(producto => (
                    <div key={producto.id} className='productWrapper'>
                        <img src={producto.image} alt={producto.title} />
                        {producto.title}
                        ${producto.price}
                        <button>Add to cart</button>
                    </div>
                ))}
            </div>
            <a href='/'><i className="fa-regular fa-hand-point-up up"></i></a>
        </div>
    );
}

export default Home;