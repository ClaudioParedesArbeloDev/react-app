import { useState, useEffect } from 'react';

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

    console.log(productos);

    return (
        <div>
            <h1>Inicio</h1>
            <p>Esta es la página de inicio</p>
            <div>
                {productos.map(producto => (
                    <div key={producto.id}>
                        {producto.title}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;