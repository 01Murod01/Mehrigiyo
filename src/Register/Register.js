import React, { useState } from "react";
import elPassword from "../assets/images/kozparol.svg";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import "../Login/Login.css";

function Register() {
  const [goToLogin, setGoToLogin] = useState(false);
  return goToLogin ? (
    <Login />
  ) : (
    <div className="Login">
      <div className="alllogin">
        <div className="container">
          <div className="register__wrapper">
            <Link onClick={() => setGoToLogin(true)} className="kirish">
              Royxatdan o'tish
            </Link>
          </div>
          <form>
            <br />
            <input
              className="login__input"
              placeholder="Foydalanuvchi nomi"
              type="text"
              name="nomer"
              required
            />
            <div className="line"></div>
            <br />
            <label className="login__label">Elektron pochta(optinal)</label>
            <br />
            <input
              className="login__input"
              type="text"
              name="nomer"
              required
            />
            <br />
            <div className="line"></div>
            <label className="login__label">Parolni o'ylab toping</label>
            <br />
            <div className="password__wrapper">
              <input
                className="login__input"
                type="password"
                name="parol"
                required
              />
              <img src={elPassword} alt="passwordlogo" />
            </div>
            <div className="line"></div>
            <button className="login__button" type="submit">
              Ro'yxatdan o'tish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
