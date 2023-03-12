import React from "react";
import "./TopNavbar.css";
import flaguzb from "../../assets/images/flaguzb.svg";
import location from "../../assets/images/location.svg";
import userfoto from "../../assets/images/userfoto.svg";

function TopNavbar() {
  return (
    <div className="TopNavbar">
      <div className="container flex items-center justify-between">
        <ul className="TopNavbar__list flex items-center justify-center">
          <li className="TopNavbar__list-item">Mahsulotlar katalogi</li>
          <li className="TopNavbar__list-item">Foto-lavhalar</li>
          <li className="TopNavbar__list-item">Yetkazib berish va to'lash</li>
          <li style={{ color: "#AB7A19" }} className="TopNavbar__list-item">
            Aksiya
          </li>
          <li style={{ color: "#53B175" }} className="TopNavbar__list-item">
            Yangi
          </li>
        </ul>
        <div className="TopNavbar__right">
          <ul className="TopNavbar__right__list flex items-center justify-center">
            <li className="TopNavbar__right-item">
              <span>
                <img src={flaguzb} alt="flaguzb" />
              </span>
            </li>
            <li className="verticalline"></li>
            <li className="TopNavbar__right-item flex">
              <span className="mr-[9px]">Toshkent shahar</span>
              <img src={location} alt="location" />
            </li>
            <li className="verticalline"></li>
            <li className="TopNavbar__right-item flex">
              <span className="mr-[8px]">Kirish</span>
              <img src={userfoto} alt="userfoto" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
