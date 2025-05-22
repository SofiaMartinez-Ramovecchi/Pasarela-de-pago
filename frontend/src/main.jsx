import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartSidebar from './components/CartSidebar.jsx'
import Header from './components/Header.jsx'
import ProductCard from './components/ProductCard.jsx'
import CartContext from './context/CartContext.jsx'
import { CartProvider } from '../context/CartContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header/>
    <ProductCard/>
    <CartSidebar/>

  </StrictMode>,
)
