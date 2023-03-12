import React from "react";
import sorovfoto from "../../assets/images/sorovfoto.png";
import xabaryuborish from "../../assets/images/xabaryuborish.svg";
import flaguzb from "../../assets/images/flaguzb.svg";
import "./Sorovnoma.css";

function Sorovnoma() {
  return (
    <div className="Sorovnoma">
      <div className="container flex items-end">
        <img src={sorovfoto} width="519" height="402" alt="sorovfoto" />
        <form className="w-[364px] ml-[160px] mt-[300px]">
          <strong className="sorov__boglanish">Biz bilan bog'lanish</strong>
          <h2 className="sorov__title">So'rovingizni yuboring</h2>
          <input
            className="w-[100%] h-[50px]"
            type="text"
            placeholder="Mahmud"
          />
          <div className="middleline"></div>
          <input
            className="w-[100%] h-[50px] mt-[24px]"
            type="email"
            placeholder="nmahmud0928@gmail.com"
          />
          <div className="middleline mb-[24px]"></div>
          <label className="telefonraqam ">
            Telefon raqam
            <span className="flex items-center">
              <img src={flaguzb} className="mr-[9px]" alt="flaguzb" />
              <input
                type="number"
                className="w-[100%] h-[50px]"
                placeholder="+998 94 681"
              />
            </span>
          </label>
          <div className="middleline green"></div>
          <input type="text" className="w-[100%] h-[50px]" />
          <div className="middleline"></div>
          <button
            className="sorov_btn flex justify-center items-center mt-[24px]"
            type="submit"
          >
            Xabar yuborish{" "}
            <img
              className="ml-[20px]"
              src={xabaryuborish}
              alt="xabaryuborish"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sorovnoma;
