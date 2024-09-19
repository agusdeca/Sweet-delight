import { useState } from "react";
import { products } from "../utils/products";
import CardProduct from "../components/CardProduct";
import { useCart } from "../context/CartContext";
import Footer from "../components/footer/Footer";

export default function Products() {
  const [message, setMessage] = useState("");
  const { dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <>
      <div className="catalogo-container">
        <h1>Catálogo</h1>
        {message && <div className="alert">{message}</div>}
        <div className="products-container">
          {products.map((product) => (
            <CardProduct
              product={product}
              key={product.id}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
