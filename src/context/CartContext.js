import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      toast.success('Producto agregado al carrito', {
        autoClose: 1500,
      });
    } else {
      toast.error('Este producto ya fue agregado', {
        autoClose: 1500,
      });
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };
  const clearCart = () => {
    setCart([]);
  };
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const total = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  const totalQuantity = cart.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);

  return <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>{children}</CartContext.Provider>;
};

export default CartProvider;
