import React from "react";
import homeback from "../../assets/images/homeback.svg";
import playmarket from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import telegram from "../../assets/images/telegram.svg";
import youtube from "../../assets/images/youtube.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer mt-[104px]">
      <div className="container">
        <div className="Footer__top mb-[25px]">
          <strong style={{ color: "white" }} className="mainLogo mr-[111px]">
            LOGO
          </strong>

          <ul className="flex justify-between items-start mt-[14px]">
            <li>
              <p className="footer__text mb-[18px]">
                Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar
              </p>
              <p className="footer__text mb-[18px]">
                Ish vaqti: Har kuni 8:00 dan 18:00 gacha
              </p>
              <ul className="flex w-[200px] justify-between">
                <li>
                  <img src={facebook} alt="facebook" />
                </li>
                <li>
                  <img src={instagram} alt="instagram" />
                </li>
                <li>
                  <img src={telegram} alt="telegram" />
                </li>
                <li>
                  <img src={youtube} alt="youtube" />
                </li>
              </ul>
            </li>
            <li>
              <strong className="footerhuquqiy">Huquqiy</strong>
            </li>
            <li>
              <strong className="footerdownload">Ilovani yuklab olish</strong>
              <img
                className="mb-[16px] mt-[24px]"
                src={playmarket}
                width="162"
                height="48"
                alt="playmarket"
              />
              <img src={appstore} width="162" height="48" alt="appstore" />
            </li>
          </ul>
        </div>
        <div className="Footer__bottom flex justify-between  items-end">
          <div className="Footer__card flex justify-between items-center">
            <span>
              <p className="Footer__card-text">E-mail</p>
              <strong className="Footer__card-title">info@mehrigiyo.uz</strong>
            </span>
            <span>
              <p className="Footer__card-text">Bizga qo'ng'iroq qiling</p>
              <strong className="Footer__card-title">+99898 125 31 03</strong>
            </span>
          </div>
          <img
            src={homeback}
            className="mr-[-100px]"
            width="690"
            height="127"
            alt="homeback"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
