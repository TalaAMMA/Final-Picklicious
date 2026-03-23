import { getItem } from "../../js/storage.utils.js";

const UpdateCart = async (item) => {
  let status;
  let result;

  const token = getItem("token");
  const config = {
    method: "PUT",
    body: JSON.stringify(item),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: token,
    },
  };
  try {
    const response = await fetch(
      `http://localhost:7001/cart/UpdateCart`,
      config
    );
    status = response.status;
    result = await response.json();

    const id = result.updatedProduct.id;
    const cart = getItem("cart") || [];
    let updatedCart = cart.filter((product) => {
      return product.id !== id;
    });

    updatedCart = [...updatedCart, result.updatedProduct];

    return updatedCart;
  } catch (e) {
    console.error(e.message);
    onError();
    return null;
  }
};
export default UpdateCart;
