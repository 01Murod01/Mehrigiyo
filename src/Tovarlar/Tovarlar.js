import React from "react";
import phonefix from "../assets/images/phonefix.svg";
import smsfix from "../assets/images/smsfix.svg";

function Tovarlar() {
  return (
    <div className="Tovarlar">
      <div className="container">
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
    </div>
  );
}

export default Tovarlar;
