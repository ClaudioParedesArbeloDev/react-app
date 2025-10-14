import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './pages/home/home.jsx'

import './style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar saludo='Hola' despedida='Adios' />
    <Home />
    <Footer />
  </StrictMode>,
)
