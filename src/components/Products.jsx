import React from "react";
import AppContext from "../context/AppContext";
import { Product } from "./Product";
import "../styles/components/Products.css";

function Products() {
  const { state, addToCart } = React.useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
    console.log("click");
  };

  return (
    <div className="Products-container">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export { Products };
