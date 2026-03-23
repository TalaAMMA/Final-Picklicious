import React, { useState } from "react";
import { hash } from "../../js/crypto.js";
import { setItem } from "../../js/storage.utils.js";

export const SignUp = ({ onError, setError, setIsLogged }) => {
  const handleSubmit = async (event) => {
   
    event.preventDefault();
    let result;
    let status;
    const form = {
      last_name,
      first_name,
      email,
      password: hash(plaintextPassword),
      confirm_pass: hash(plaintextConfirmPassword),
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
        `http://localhost:7001/users/sign-up`,
        config
      );

      status = response.status;
      result = await response.json();
    } catch (e) {
      console.error("Problem with request : ", e.message);
      onError();
      return;
    }

    if (status >= 400) {
      onError(status);
      return;
    }
    

    setError("");
    setEmail("");
    setPassword("");
    setFirstName("");
    setConfirmPass("");
    setLastName("");
    setPlaintextPassword("");
    setPlaintextConfirmPassword("");

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
  const handleChangeFirstName = (value) => {
    setFirstName(value);
  };
  const handleChangeLastName = (value) => {
    setLastName(value);
  };
  const handleChangeConfirmPass = (value) => {
    setConfirmPass(value);
    setPlaintextConfirmPassword(value);
  };
  const showPassword = () => {
    setshow_Password(!show_Password);
  };
  const showConfirmPassword = () => {
    setshow_ConfirmPassword(!show_ConfirmPassword);
  };
  const [show_Password, setshow_Password] = useState(false);
  const [show_ConfirmPassword, setshow_ConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_pass, setConfirmPass] = useState("");
  const [plaintextPassword, setPlaintextPassword] = useState("");
  const [plaintextConfirmPassword, setPlaintextConfirmPassword] = useState("");

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
              className="name"
              placeholder="Last-Name"
              type={"name"}
              value={last_name}
              required={true}
              onChange={(e) => handleChangeLastName(e.target.value)}
            ></input>
            <input
              className="name"
              placeholder="First-Name"
              type={"name"}
              value={first_name}
              required={true}
              onChange={(e) => handleChangeFirstName(e.target.value)}
            ></input>
            <input
              className="mail"
              placeholder="E-mail"
              type={"email"}
              value={email}
              required={true}
              onChange={(e) => handleChangeEmail(e.target.value)}
            ></input>

            <div className="containerPassword">
              <input
                className="password"
                placeholder="Password"
                type={show_Password ? "text" : "password"}
                required={true}
                value={showPassword ? plaintextPassword : password}
                onChange={(e) => handleChangePassword(e.target.value)}
              ></input>
              <span onClick={showPassword}>
                <img className="eye" src="../images/eye.png" alt="eye" />
              </span>
            </div>
            <div className="containerPassword">
              <input
                className="confirmation"
                placeholder="Confirm password"
                type={show_ConfirmPassword ? "text" : "password"}
                value={show_ConfirmPassword? plaintextConfirmPassword : confirm_pass}
                required={true}
                onChange={(e) => handleChangeConfirmPass(e.target.value)}
              ></input>
              <span onClick={showConfirmPassword}>
                <img className="eye" src="../images/eye.png" alt="eye"/>
              </span>
            </div>

            <button type="submit" className="buttonSign">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
