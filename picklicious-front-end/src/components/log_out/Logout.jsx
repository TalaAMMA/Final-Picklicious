import { SignIn } from "../signIn/SignIn.jsx";
import { SignUp } from "../signUp/SignUp.jsx";
import React from "react";

const HOME_STATE = {
  signIn: "sign-in",
  signUp: "sign-up",
};
export const Logout = ({ setIsLogged }) => {
  const handleErrors = (status) => {
    switch (status) {
      case 400:
        setError("Email or password not valid");
        break;
      case 401:
        setError("Wrong email or password");
        break;
      case 403:
        setError("User already exists");
        break;
      case 405:
        setError("Password does not match");
        break;
    }
  };

  const [error, setError] = React.useState("");
  const [homeState, setHomeState] = React.useState(HOME_STATE.signIn);
  return (
    <div className="containerSign">
      {homeState === HOME_STATE.signIn ? (
        <div className="UpOrIn">
          <SignIn
            onError={handleErrors}
            setError={setError}
            setIsLogged={setIsLogged}
          />
          <button
            type="button"
            className="switchBtn"
            onClick={() => setHomeState(HOME_STATE.signUp)}
          >
            Don't have an account?
          </button>
        </div>
      ) : (
        <div className="UpOrIn">
          <SignUp
            onError={handleErrors}
            setError={setError}
            setIsLogged={setIsLogged}
          />
          <button
            type="button"
            className="switchBtn"
            onClick={() => setHomeState(HOME_STATE.signIn)}
          >
            Sign In
          </button>
        </div>
      )}

      {error && <p>"{error}"</p>}
    </div>
  );
};
