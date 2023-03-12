import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="container flex items-center ">
        <strong className="mainLogo mr-[111px]">LOGO</strong>
        <NavLink
          to="/"
          className="navlink mr-[26px]"
          style={({ isActive }) => {
            return {
              color: isActive ? "#181725" : "",
              opacity: isActive ? "" : "0.4",
              borderBottom: isActive ? "3px solid #53B175" : "",
            };
          }}
        >
          Bosh sahifa
        </NavLink>
        <NavLink
          className="navlink"
          to="/Tovarlar"
          style={({ isActive }) => {
            return {
              color: isActive ? "#181725" : "",
              opacity: isActive ? "" : "0.4",
              borderBottom: isActive ? "3px solid #53B175" : "",
            };
          }}
        >
          Mahsulotlar
        </NavLink>
        <div className="Header__right flex ml-[auto]">
          <NavLink
            className="heart-icon"
            to="/Like"
            style={({ isActive }) => {
              return {
                background: isActive ? "#53B175" : "",
              };
            }}
          >
            <i className="fas fa-solid fa-heart" />
          </NavLink>
          <NavLink
            className="cart-icon"
            to="/Cart"
            style={({ isActive }) => {
              return {
                background: isActive ? "#53B175" : "",
              };
            }}
          >
            <i className="fas fa-shopping-cart" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
