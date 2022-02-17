import React from "react";
import { Checkouts } from "../components/Checkouts";
import AppContext from "../context/AppContext";
import "../styles/components/Checkout.css";
function Checkout() {
  const { state, removeFromCart } = React.useContext(AppContext);
  const { cart } = state;
  const { products } = state;
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        {cart.length > 0 ? (
          <h3>Lista de pedidos:</h3>
        ) : (
          <h3>Ve a comprar...</h3>
        )}
        {cart.map((item) => (
          <Checkouts
            key={item.id}
            item={item}
            cart={cart}
            products={products}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
}

export { Checkout };
