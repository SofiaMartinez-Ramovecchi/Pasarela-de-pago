import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartSidebar from './components/CartSidebar.jsx'
import Header from './components/Header.jsx'

import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
       <Header/>
      <CartSidebar/>
    </CartProvider>
  </StrictMode>
)
