import { LogIn } from "../log_in/LogIn.jsx";
import { Logout } from "../log_out/Logout.jsx";
import { getItem } from "../../js/storage.utils.js";
import React from "react";

const MainApp = () => {
  React.useEffect(() => {
    const token = getItem("token");
    console.log(token);
    setIsLogged(token && token.length > 0);
  });
  const [isLogged, setIsLogged] = React.useState(false);
  return (
    <>
      {isLogged ? (
        <LogIn setIsLogged={setIsLogged} />
      ) : (
        <Logout setIsLogged={setIsLogged} />
      )}
    </>
  );
};

export default MainApp;
