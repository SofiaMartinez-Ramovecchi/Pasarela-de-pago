import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">€{product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)} 
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors"
            aria-label={`Añadir ${product.name} al carrito`}
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
