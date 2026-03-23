import { getItem, setItem } from "../../js/storage.utils.js";

export const AddProductToCart = async (product) => {
    let status;
    let result;
    const Product = {
      name: product.name,
      quantity: product.quantity,
      price: product.price,
      image: product.image,
    };
    console.log(Product);
    const token = getItem("token");
    console.log(token);
    const config = {
      method: "POST",
      body: JSON.stringify(Product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: token,
      },
    };
    try {
      const response = await fetch(
        `http://localhost:7001/cart/AddProductToCart`,
        config
      );
      status = response.status;
      result = await response.json();
      const cart = getItem("cart") || [];
      setItem("cart", [...cart, result.item]);

      console.log(result.item);
      console.log(status);
    } catch (e) {
      console.error(e.message);
      onError();
      return;
    }
  };