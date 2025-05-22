import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart, X, Plus, Minus, ArrowRight } from 'lucide-react';

const CartSidebar = () => {
  const {
    items,
    isOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <ShoppingCart className="text-blue-500 mr-2" />
              <h2 className="text-lg font-semibold">Tu Carrito ({totalItems})</h2>
            </div>
            <button
              onClick={toggleCart}
              className="p-1 rounded-full hover:bg-gray-100"
              aria-label="Cerrar carrito"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <ShoppingCart size={48} className="mb-4 opacity-30" />
                <p className="text-center">Tu carrito está vacío</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center border-b pb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-blue-600 font-semibold">
                        €{item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 text-gray-500 hover:bg-gray-100 rounded"
                        aria-label="Decrementar cantidad"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 text-gray-500 hover:bg-gray-100 rounded"
                        aria-label="Incrementar cantidad"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-2 p-1 text-red-500 hover:bg-red-50 rounded"
                      aria-label={`Eliminar ${item.name} del carrito`}
                    >
                      <X size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total:</span>
              <span>€{totalPrice.toFixed(2)}</span>
            </div>
            <button
              className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={items.length === 0}
            >
              Finalizar compra <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
