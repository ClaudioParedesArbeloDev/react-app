import { Link } from 'react-router-dom'

import './navbar.css'

function Navbar() {
    return (
        <header className='headerPage'>
            <div>
                <h2>Tienda</h2>
            </div>
            <nav>
                <li className='btnNav'> <Link to='/'> Home </Link> </li>
                <li className='btnNav'> <Link to='/products'> Products </Link> </li>
                <li className='btnNav'> <Link to='/about'> AboutUs </Link> </li>
                <li className='btnNav'> Contact </li>
            </nav>
            <div className='cart'>
                <i className="fa-solid fa-cart-shopping carrito"></i>
            </div>
        </header>
    )
}

export default Navbar