import { AddProductToCart } from "../api/items/create.api";
import { getItem } from "./storage.utils.js";

const handleButtonClick = (item, setpopUp) => {
  const token = getItem("token");
  console.log(token);
  if (token) {
    AddProductToCart(item);
    setpopUp(true);
    setTimeout(() => {
      setpopUp(false);
    }, 4000);
  } else {
    window.location.href = "account.html";
    setpopUp(false);
  }
};

export default handleButtonClick;

