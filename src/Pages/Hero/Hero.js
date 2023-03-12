import React from "react";
import "./Hero.css";
import doctor from "../../assets/images/doctor.png";
import consultant from "../../assets/images/consultant.svg";
import xizmatlar from "../../assets/images/hour.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <h1 className="Hero__title">Bepul shifokor maslahat kerakmi?</h1>
        <p className="Hero__text">
          24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq Faqat{" "}
          <Link className="mobililova" href="#">
            mobil ilovada
          </Link>
        </p>
        <div className="hero__wrapper">
          <img
            className="hero__image m-[auto] mt-[140px]"
            src={doctor}
            alt="doctor"
          />
          <div className="hero__card flex flex-wrap items-center justify-center p-[15px] text-center">
            <img
              src={consultant}
              width="24px"
              alt="consultant"
              className="mr-[10px]"
            />
            <h2 className="hero__card-title">Consultant</h2>
            <p className="hero__card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              ullamcorper in et amet.
            </p>
          </div>
          <div className="hero__card hero__card2 flex flex-wrap items-center justify-center p-[15px] text-center">
            <img
              src={xizmatlar}
              width="24px"
              alt="consultant"
              className="mr-[10px]"
            />
            <h2 className="hero__card-title">24/7 xizmatlar</h2>
            <p className="hero__card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              ullamcorper in et amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
