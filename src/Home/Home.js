import React from "react";
import Company from "../Pages/Company/Company";
import Hero from "../Pages/Hero/Hero";
import Mahsulotlar from "../Pages/Mahsulotlar/Mahsulotlar";
import Qulayliklar from "../Pages/Qulayliklar/Qulayliklar";
import Savollar from "../Pages/Savollar/Savollar";
import Shifobaxsh from "../Pages/Shifobaxsh/Shifobaxsh";
import Sorovnoma from "../Pages/Sorovnoma/Sorovnoma";
import phonefix from "../assets/images/phonefix.svg";
import smsfix from "../assets/images/smsfix.svg";
import "./Home.css";
function Home() {
  return (
    <div>
      <Hero />
      <Qulayliklar />
      <Mahsulotlar />
      <Shifobaxsh />
      <Savollar />
      <Sorovnoma />
      <Company />

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

export default Home;
