import React from "react";
import "./Like.css";
import boxzero from "../../assets/images/boxzero.png";
import bargright from "../../assets/images/bargright.svg";
import phonefix from "../../assets/images/phonefix.svg";
import smsfix from "../../assets/images/smsfix.svg";

function Like() {
  return (
    <div className="Cart relative">
      <p className="product-title">
        Bosh sahifa /{" "}
        <strong className="product-text">Saqlangan dorilar</strong>
        <h2 className="cart-title mt-[20px]">Sevimli dorilar</h2>
        <div className="unshow">
          <img src={boxzero} alt="boxzero" className="box" />
          <h3 className="saqlangan_title">Saqlangan dorilar bo’sh!</h3>
          <p className="saqlangan_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor
          </p>
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

export default Like;
