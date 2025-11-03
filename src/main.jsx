import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './pages/home/home.jsx'
import Products from './pages/products/products.jsx'
import About from './pages/about/about.jsx'

import './style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
