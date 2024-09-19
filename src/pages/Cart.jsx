import CartComponent from "../components/CartComponent";
import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setNotification(`${product.name} ha sido añadido al carrito`);
    setTimeout(() => {
      setNotification("");
    }, 1000);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.name !== product.name));
  };

  const updateQuantity = (product, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.name === product.name ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <div className="cart-container">
      <CartComponent
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}
