import React from "react";
import grandpharm from "../../assets/images/grandpharm.svg";
import asklepiy from "../../assets/images/asklepiy.svg";
import doridarmon from "../../assets/images/doridarmon.svg";
import nikapharm from "../../assets/images/nikapharm.svg";
import laxisam from "../../assets/images/laxisam.svg";
import jayxun from "../../assets/images/jayxun.svg";
import "./Company.css";


function Company() {
  return (
    <div className="Company">
      <div className="container">
        <div className="uzunline mb-[40px]"></div>
        <div className="flex justify-between items-center w-[100%]">
          <img src={grandpharm} alt="grandpharm" />
          <img src={asklepiy} alt="asklepiy" />
          <img src={doridarmon} alt="doridarmon" />
          <img src={nikapharm} alt="nikapharm" />
          <img src={laxisam} alt="laxisam" />
          <img src={jayxun} alt="jayxun" />
        </div>
        <div className="uzunline mt-[40px]"></div>
      </div>
    </div>
  );
}

export default Company;
