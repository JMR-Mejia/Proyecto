import React from "react";
import initialState from "../initialState";

const useInitialStateShop = () => {
  const [state, setState] = React.useState(initialState);

  const [counter, setCounter] = React.useState(0);
  const addCounter = () => {
    setCounter(counter + 1);
    return counter;
  };
  /*  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, { ...payload, index: addCounter() }],
    });
  }; */
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.index !== payload.index),
    });
  };
  return {
    state,
    addToCart,
    removeFromCart,
  };
};
export { useInitialStateShop };
