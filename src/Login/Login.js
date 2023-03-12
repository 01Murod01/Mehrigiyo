import React, { useRef, useState } from "react";
import elPassword from "../assets/images/kozparol.svg";
import Register from "../Register/Register";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  const [goToSignUp, setGoToSignUp] = useState(false);
  const phoneRef = useRef();
  const passwordRef = useRef();
  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem("token")) || {}
  );
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setToken({
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
    });
    window.location.reload();
  };
  window.localStorage.setItem("token", JSON.stringify(token));
  return goToSignUp ? (
    <Register setGoToSignUp={setGoToSignUp} />
  ) : (
    <div className="Login">
      <div className="alllogin">
        <div className="container">
          <div className="login__wrapper">
            <Link onClick={() => setGoToSignUp(true)} className="royxat">
              Kirish
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="login__label">Telefon raqam</label>
            <br />
            <input
              ref={phoneRef}
              className="login__input"
              placeholder="Sizning raqamingiz:"
              type="text"
              name="nomer"
              required
            />
            <br />
            <div className="line"></div>
            <label className="login__label">Parol</label>
            <br />
            <div className="password__wrapper">
              <input
                ref={passwordRef}
                className="login__input"
                placeholder="Sizning parolingiz:"
                type="password"
                name="parol"
                required
              />
              <img src={elPassword} alt="passwordlogo" />
            </div>
            <div className="line"></div>
            <button className="login__button" type="submit">
              Tizimga kirish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
