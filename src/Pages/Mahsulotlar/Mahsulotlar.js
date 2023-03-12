import React from "react";
import "./Mahsulotlar.css";
import strelka from "../../assets/images/strelka.svg";
import rightbtn from "../../assets/images/rightbtn.svg";
import data from "../../Data/Data";
function Mahsulotlar() {
  const { productItems } = data;
  return (
    <div className="Mahsulotlar mb-[181px]">
      <div className="container">
        <h2 className="Mahsulotlar__heading">Mahsulotlarimiz ro'yxati</h2>
        <ul className="Mahsulotlar__list flex gap-7 mb-[50px]">
          {productItems.map((productItem) => (
            <li key={productItem.id} className="Mahsulotlar__item">
              <img
                src={productItem.image}
                className="mb-[16px]"
                width="175"
                height="175"
                alt={productItem.name}
              />
              <h3 className="Mahsulotlar__title">{productItem.name}</h3>
              <p className="Mahsulotlar__text">{productItem.text}</p>
              <div className="narx__wrapper mb-3 flex gap-1 items-center flex-wrap">
                <div>
                  <span className="narx__delete">{productItem.delprice}</span>
                  <strong className="narx">{productItem.price}</strong>
                </div>
                <button className="buttonplus mb-[30px]">+</button>
              </div>
              <button className="tafsilotlar flex items-center m-[auto]">
                Tafsilotlar
                <img className="ml-[8px]" src={rightbtn} alt="xabaryuborish" />
              </button>
            </li>
          ))}
        </ul>

        <div className="Mahsulotlar__bottom">
          <button
            className="flex justify-center items-center mt-[24px]"
            type="button"
          >
            Barcha mahsulotlarni ko’rish
            <img className="ml-[21px]" src={strelka} alt="xabaryuborish" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mahsulotlar;
