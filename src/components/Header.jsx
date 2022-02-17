import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/components/Header.css";

function Header() {
  const [hamburger, setHamburger] = React.useState(false);
  const { state } = React.useContext(AppContext);
  const { cart } = state;

  const visibilityHambuerguer = () => {
    setHamburger(!hamburger);
  };
  return (
    <header className={`header ${!!hamburger && `nav_header-padding`}`}>
      <nav className="nav">
        <div className="div-jus">
          <Link to="/">
            <a href="#" className="logo nav-link">
              Start Bootstrap
            </a>
          </Link>
          <button
            className="nav-toggle"
            onClick={visibilityHambuerguer}
            aria-label="Abrir menú"
          >
            <i className="fas fa-bars"></i>
          </button>
          <ul className={`nav-menu ${!!hamburger && `nav-menu_visible`}`}>
            <li className="nav-menu-item">
              <Link to="/">
                <a href="#" className="nav-menu-link nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link nav-link">
                About
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link nav-link">
                Shop
              </a>
            </li>
            <li className="nav-cart">
              <form className="card-shopping_respon">
                <button className="card-button_respon" type="submit">
                  <i className="cart fa-solid fa-cart-shopping"></i>
                  Cart
                  {cart.length > 0 && (
                    <span className="Price">{cart.length} </span>
                  )}
                </button>
              </form>
            </li>
          </ul>
          <Link to="/Checkout">
            <form className="card-shopping">
              <button className="card-button" type="submit">
                <i className="cart fa-solid fa-cart-shopping"></i>
                Cart
                {cart.length > 0 && (
                  <span className="Price">{cart.length} </span>
                )}
              </button>
            </form>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export { Header };
