import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  return (
    <div className="navbar">
      <div className="navLinks">
        <NavLink
          className="category-link"
          to="/e-commerce-website/">
          HOME
        </NavLink>

        <NavLink
          className="category-link"
          to="/e-commerce-website/men-clothing">
          MEN'S
        </NavLink>
        <NavLink
          className="category-link"
          to="/e-commerce-website/women-clothing">
          WOMEN'S
        </NavLink>
        <NavLink
          className="category-link"
          to="/e-commerce-website/electronics">
          ELECTRONICS
        </NavLink>
        <NavLink
          className="category-link"
          to="/e-commerce-website/jewellery">
          JEWELLERY
        </NavLink>
      </div>
      <div className="profile">
        <Link to="/e-commerce-website/cart">
          <div className="shopping-cart-container">
            <div className="shooping-cart">
              <svg
                className="cart-icon"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 32 32"
                id="shopping-cart">
                <path d="M26.85 20.82H8.74a1 1 0 0 1-1-.85l-2-12.75a1 1 0 0 1 .26-.8 1 1 0 0 1 .76-.35h22.09a1 1 0 0 1 .76.35 1 1 0 0 1 .23.8l-2 12.78a1 1 0 0 1-.99.82Zm-17.25-2H26l1.68-10.75H7.91Z"></path>
                <path d="M25.49 23.55H8.74a1 1 0 0 1-1-1V19.9l-2-12.49-1.48-2.65-1.37-.37a1 1 0 0 1 .52-1.93l1.77.48a1 1 0 0 1 .61.47l1.82 3.16a1 1 0 0 1 .12.34l2 12.75a.86.86 0 0 1 0 .16v1.73h15.76a1 1 0 0 1 0 2zM11 29.58a2.69 2.69 0 1 1 2.68-2.69A2.69 2.69 0 0 1 11 29.58zm0-3.38a.69.69 0 0 0 0 1.38.69.69 0 0 0 0-1.38zm11.92 3.38a2.69 2.69 0 1 1 2.69-2.69 2.7 2.7 0 0 1-2.69 2.69zm0-3.38a.69.69 0 1 0 .69.69.69.69 0 0 0-.69-.69z"></path>
              </svg>
            </div>
            <span className="cart-no-items">{totalItems}</span>
          </div>
        </Link>
        <button
          id="logout-btn"
          type="submit">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
