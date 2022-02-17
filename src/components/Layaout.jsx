import React from "react";
import { Header } from "./Header";
import { Home_Header } from "../components/HomeComp";
import { Footer } from "./Footer";

function Layaout({ children }) {
  return (
    <div className="Main">
      <Header />
      <Home_Header />
      {children}
      <Footer />
    </div>
  );
}

export { Layaout };
