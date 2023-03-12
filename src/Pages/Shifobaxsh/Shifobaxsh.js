import React from "react";
import homeback from "../../assets/images/homeback.svg";
import Shifobaxshfoto from "../../assets/images/shifobaxshfoto.png";
import "./Shifobaxsh.css";

function Shifobaxsh() {
  return (
    <div className="Shifobaxsh mb-[141px]">
      <div className="container">
        <h2 className="Shifobaxsh__title">
          Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz
        </h2>
        <img
          src={homeback}
          className="mt-[105px] ml-[28px]"
          width="525"
          height="97"
          alt="homeback"
        />
        <img src={Shifobaxshfoto} className="block ml-[auto] mt-[-300px]" alt="shifobaxsh" />
      </div>
    </div>
  );
}

export default Shifobaxsh;
