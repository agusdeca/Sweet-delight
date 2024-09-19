export default function CardProduct({ product, index, addToCart }) {
  return (
    <div key={index} className="product-card">
      <img src={product.img} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.descripcion}</p>
        <div className="product-footer">
          <span>${product.price}</span>
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            🛒 Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
