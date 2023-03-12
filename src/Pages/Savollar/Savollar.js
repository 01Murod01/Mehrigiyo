import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import pluslogo from "../../assets/images/pluslogo.svg";
import Styles from "./Savollar.module.css";
import strelka from "../../assets/images/strelka.svg";
import "./Savollar.css";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className={Styles.chevron} src={pluslogo} alt="pluslogo" />
      </>
    }
    className={Styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${Styles.itemBtn} ${isEnter && Styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: Styles.itemContent }}
    panelProps={{ className: Styles.itemPanel }}
  />
);

function Savollar() {
  return (
    <div className="Savollar">
      <div className="container flex justify-between">
        <div className="Savollar__top">
          <h2 className="Savollar__top__title w-[412px]">Ko’p so'raladigan savollar</h2>
          <p className="Savollar__top__text w-[231px]">
            Qo'shimcha ma'lumot uchun biz bilan bog'laning
          </p>
          <button
            className="sorov_btn flex justify-center items-center mt-[24px]"
            type="button"
          >
            Batafsil
            <img className="ml-[20px]" src={strelka} alt="xabaryuborish" />
          </button>
        </div>
        <div className={Savollar.app}>
            <div className="bargback"></div>
          <Accordion
            transition
            transitionTimeout={200}
            className="accordion__list"
          >
            <AccordionItem initialEntered header="Какой состав сока Alatoo?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>

            <AccordionItem header="Сколько стоит Алатоо и сколько стоит доставка?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>
            <AccordionItem header="Здравствуйте, аллергия часто на этот сок?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>
            <AccordionItem header="Эффективен ли сок Алатоо при часто рецидивирующем герпесе?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>
            <AccordionItem header="Здравствуйте, можно ли принимать при полипе в жёлчном пузыре?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
export default Savollar;
