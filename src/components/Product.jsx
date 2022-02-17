import React from "react";

function Product({ product, handleAddToCart }) {
  return (
    <div className="Product-container">
      <img src={product.image} alt={product.title} />
      <div className="Product-info">
        <h2>{product.title}</h2>
        <span>$ {product.price}</span>
      </div>
      <button
        title="Add to cart"
        type="button"
        onClick={handleAddToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
}

export { Product };
