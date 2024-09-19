import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const handleIncreaseQuantity = (product) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: product.id, quantity: product.quantity + 1 },
    });
  };

  const handleDecreaseQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: product.id, quantity: product.quantity - 1 },
      });
    }
  };

  const calculateTotalPrice = () => {
    return cart.items.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const handleRemoveFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };


  return (
    <div className="cart-items-container">
      {cart.items.length > 0 ? (
        <ul className="cart-items-list">
          {cart.items.map((product, index) => (
            <li key={index} className="cart-item">
              <img
                src={product.img}
                alt={product.name}
                className="cart-image"
              />
              <div className="cart-info">
                <h3>{product.name}</h3>
                <p>
                  ${product.price} x {product.quantity}
                </p>
                <div className="quantity-controls">
                  <button onClick={() => handleIncreaseQuantity(product)}>
                    +
                  </button>
                  <button
                    onClick={() => handleDecreaseQuantity(product)}
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFromCart(product)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
          <p>Total: ${calculateTotalPrice()}</p>

          <button className="clear-cart-btn" onClick={handleClearCart}>
            Vaciar Carrito
          </button>

          <Link className="buy-cart-btn" onClick={handleClearCart} to="/buy">
            Comprar
          </Link>
          
        </ul>
      ) : (
        <div className="empty-cart-container">
          <p className="empty-cart"> Tu carrito está vacio</p>
          <Link to="/products">Agregar productos</Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
