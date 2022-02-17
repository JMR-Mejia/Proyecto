import React from "react";
import AppContext from "../context/AppContext";
import { useInitialStateShop } from "../hooks/useInitialStateShop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layaout } from "../components/Layaout";
import { Home } from "../containers/Home";
import { Checkout } from "../containers/Checkout";

function App() {
  const initialValue = useInitialStateShop();
  return (
    <AppContext.Provider value={initialValue}>
      <BrowserRouter>
        <Layaout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </Layaout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
