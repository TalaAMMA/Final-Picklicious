import { getItem } from "./storage.utils.js";

const calculateTotal = () => {
  const cart = getItem("cart")
  let calc = 0;
  if (cart) {
    cart.forEach((item) => {
      console.log(item);
      calc = calc + parseFloat(item.price);
    });
  }
};
export default calculateTotal;
