import './navbar.css'

function Navbar(props) {
    return (
        <header className='headerPage'>
            <div>
                <h2>Tienda</h2>
            </div>
            <nav>
                <li className='btnNav'> Home </li>
                <li className='btnNav'> Products </li>
                <li className='btnNav'> AboutUs </li>
                <li className='btnNav'> Contact </li>
            </nav>
            <div className='cart'>
                <i className="fa-solid fa-cart-shopping carrito"></i>
            </div>
        </header>
    )
}

export default Navbar