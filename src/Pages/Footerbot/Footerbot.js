import React from "react";
import "./Footerbot.css";

function Footerbot() {
  return (
    <div className="Footerbot">
      <div className="container flex items-center justify-between">
        <p className="footerbot__text">
          © 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan. <br /> Saytdan
          olingan barcha maʼlumotlar chop etilganda veb-saytga havola qilish
          majburiy.
        </p>
        <ul className="footerbot__list flex ">
          <li className="footerbot__list-item">Bosh sahifa</li>
          <li className="footerbot__list-item">Biz haqimizda</li>
          <li className="footerbot__list-item">Yangiliklar</li>
        </ul>
      </div>
    </div>
  );
}

export default Footerbot;
