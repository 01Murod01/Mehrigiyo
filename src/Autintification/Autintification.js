import React from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import TopNavbar from "../Pages/TopNavbar/TopNavbar";
import Header from "../Pages/Header/Header";
import Home from "../Home/Home";
import Like from "../Pages/Like/Like";
import Cart from "../Pages/Cart/Cart";
import Footer from "../Pages/Footer/Footer";
import Footerbot from "../Pages/Footerbot/Footerbot";
import Tovarlar from "../Tovarlar/Tovarlar";

function Autintification() {
  return (
    <div>
      <TopNavbar />
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Tovarlar"} element={<Tovarlar />} />
        <Route path={"/Cart"} element={<Cart />} />
        <Route path={"/Like"} element={<Like />} />
      </Routes>
      <Footer />
      <Footerbot />
    </div>
  );
}

export default Autintification;
