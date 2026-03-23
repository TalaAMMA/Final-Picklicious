import React, { useState } from "react";
import { hash } from "../../js/crypto.js";
import { setItem } from "../../js/storage.utils.js";

export const SignIn = ({ onError, setError, setIsLogged }) => {
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    let result;
    let status;
    const form = {
      email,
      password: hash(plaintextPassword),
    };
    const config = {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    try {
      const response = await fetch(
        `http://localhost:7001/users/sign-in`,
        config
      );
      status = response.status;
      result = await response.json();
    } catch (e) {
      console.error("Problem with request: ", e.message);
      onError();
      return;
    }
    console.log(result);
    if (status >= 400) {
      onError(status);
      return;
    }
    setEmail("");
    setError("");
    setPassword("");
    setPlaintextPassword("");
    const token = result.token;
    setItem("token", token);
    setIsLogged(true);
  };

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
    setPlaintextPassword(value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [plaintextPassword, setPlaintextPassword] = useState("");

  return (
    <>
      <div className="formSign">
        <div className="adaptive-img-cover logoAcc">
          <span className="logo">
            <a href="index.html">
              <img src="../images/logo.jpg" alt="Logo for Pickilicious" />
            </a>
          </span>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-sign">
            <input
              className="mail"
              placeholder="E-mail"
              type="email"
              value={email}
              required={true}
              onChange={(e) => handleChangeEmail(e.target.value)}
            ></input>
            <div className="containerPassword">
              <input
                className="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                required={true}
                value={showPassword ? plaintextPassword : password}
                onChange={(e) => handleChangePassword(e.target.value)}
              ></input>
              <span onClick={toggleShowPassword}>
                <img className="eye" alt="eye" src="../images/eye.png" />
              </span>
            </div>
            <button type="submit" className="buttonSign">
              Connect
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
