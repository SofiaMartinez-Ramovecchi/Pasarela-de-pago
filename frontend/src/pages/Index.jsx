
import React from 'react';
import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import CartSidebar from '../components/CartSidebar';
import { products } from '../data/products'; // Asegurate de tener tu array de productos



const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <p> Arreglado por Fabrii ♥</p>
        </main>
        <CartSidebar />
      </div>
    </CartProvider>
  );
};

export default Index;
