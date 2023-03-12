import React from "react";
import "./Qulayliklar.css";
import yetkazib from "../../assets/images/yetkazibberish.svg";
import teztolov from "../../assets/images/teztolov.svg";
import doimiycheg from "../../assets/images/doimiychegirma.svg";
import onlaynyor from "../../assets/images/onlineyordam.svg";

function Qulayliklar() {
  return (
    <div className="Qulayliklar mt-[100px] mb-[90px]">
      <div className="container">
        <div className="uzunline mb-[40px]"></div>
        <ul className="qulay__list flex justify-around items-center">
          <li className="qulay__list-item flex w-[350px]">
            <img className="mr-[22px]" src={yetkazib} alt="yetkazib" />
            <span>
              <h2 className="qulay__list-title">Yetkazib berish bepul</h2>
              <p className="qulay__list-text">
                100 000 so'mdan ortiq buyurtma berganingizda
              </p>
            </span>
          </li>
          <li className="qulay__list-item flex w-[350px]">
            <img className="mr-[22px]" src={teztolov} alt="yetkazib" />
            <span>
              <h2 className="qulay__list-title">Tez to'lov</h2>
              <p className="qulay__list-text">100% xavfsiz to'lov</p>
            </span>
          </li>
          <li className="qulay__list-item flex w-[350px]">
            <img className="mr-[22px]" src={doimiycheg} alt="doimiycheg" />
            <span>
              <h2 className="qulay__list-title">Doimiy chegirmalar</h2>
              <p className="qulay__list-text">Ular allaqachon ishlamoqda</p>
            </span>
          </li>
          <li className="qulay__list-item flex w-[350px]">
            <img className="mr-[22px]" src={onlaynyor} alt="onlaynyor" />
            <span>
              <h2 className="qulay__list-title">Onlayn yordam</h2>
              <p className="qulay__list-text">Ish vaqti: 08:00 - 18:00</p>
            </span>
          </li>
        </ul>
        <div className="uzunline mt-[40px]"></div>
      </div>
    </div>
  );
}

export default Qulayliklar;
