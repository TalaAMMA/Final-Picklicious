import { getItem, removeItem, setItem } from "../../js/storage.utils.js";


const deleteOne = async (id) => {
  const token = getItem("token");

  const config = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: token,
    },
  };

  try {
    const response = await fetch(
      `http://localhost:7001/cart/RemoveProductFromCart/${id}`,
      config
    );

    const status = response.status;

    const result = await response.json();

    const cart = getItem("cart");
    const updatedCart = cart.filter((product) => {
      return product.id !== id;
    });

    setItem("cart",updatedCart);

    console.log(updatedCart);
    return updatedCart;
  } catch (e) {
    console.error(e.message);
    return null;
  }
};

export default deleteOne;
