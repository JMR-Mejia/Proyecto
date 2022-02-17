import React from "react";
import { Link } from "react-router-dom";

function Checkouts({ item, cart, removeFromCart, products }) {
  const handleRemoveItem = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <div className="Checkouts-component">
      <div className="Checkouts-item">
        <h2>{item.title}</h2>
        <div>
          <span>$ {item.price} </span>
          <button
            title="Eliminar"
            onClick={handleRemoveItem(item)}
            type="button"
            className="Delete-item"
          >
            <i className="fa-solid fa-ban"></i>
          </button>
        </div>
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/Checkout/Payment">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export { Checkouts };
