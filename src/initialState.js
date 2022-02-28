import React from "react";
const initialState = () => {
  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/1`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  },  []);
  return state;
};
export default initialState;
