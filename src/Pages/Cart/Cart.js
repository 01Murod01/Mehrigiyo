import React from "react";
import "./Cart.css";
import boxzero from "../../assets/images/boxzero.png";
import phonefix from "../../assets/images/phonefix.svg";
import smsfix from "../../assets/images/smsfix.svg";
import bargright from "../../assets/images/bargright.svg";

function Cart() {
  return (
    <div className="Cart relative">
      <p className="product-title">
        Bosh sahifa / <strong className="product-text">Savatcha</strong>
        <h2 className="cart-title mt-[20px]">Savatcha</h2>
        <div className="unshow">
          <img src={boxzero} alt="boxzero" className="box" />
        </div>
        <img src={bargright} alt="bargright" className="bargright" />
      </p>
      <div className="fixedelements">
        <a href="tel:">
          <div className="phonefix">
            <img src={phonefix} alt="phonefix" />
          </div>
        </a>
        <a href="sms:+998906728204">
          <div className="smsfix">
            <img src={smsfix} alt="smsfix" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Cart;
