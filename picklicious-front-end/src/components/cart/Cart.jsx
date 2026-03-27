import Modal from "../modal/Modal.jsx";
import React, { useEffect, useState } from "react";
import { getItem, setItem } from "../../js/storage.utils.js";
import UpdateCart from "../../api/items/update.api.js";
import sortByName from "../../js/sort.util.js";
import deleteOne from "../../api/items/delete.api.js";
import calculateTotal from "../../js/totalcalcul.js";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [showModal, setshowModal] = useState(false);

  const refreshCart = () => {
    const currentCart = getItem("cart") || [];
    setCartProducts(sortByName(currentCart));
    setTotal(calculateTotal());
  };

  const showCart = () => {
    refreshCart();
    setshowModal(true);
  };

  const closeCart = () => {
    setshowModal(false);
  };

  const AddOne = async (product) => {
    const updatedProduct = {
      ...product,
      quantity: parseFloat(product.quantity) + 1,
      price: product.price
    };
    const updateCart = await UpdateCart(updatedProduct);
    setItem("cart", updateCart);
    refreshCart();
  };

  const removeOne = async (product) => {
    if (product.quantity <= 1) return;
    const updatedProduct = {
      ...product,
      quantity: parseFloat(product.quantity) - 1,
      price: product.price
    };
    const updateCart = await UpdateCart(updatedProduct);
    setItem("cart", updateCart);
    refreshCart();
  };

  const deleteProductFromCart = async (productId) => {
    const updatedCart = await deleteOne(productId);
    setItem("cart", updatedCart);
    refreshCart();
  };

  const clear = () => {
    localStorage.removeItem("cart");
    setCartProducts([]);
    setTotal(0);
  };

  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <>
      <div className="adaptive-img-cover productBasket" onClick={showCart}>
        <span>
          <img src="../images/basket.png" alt="basket" />
        </span>
      </div>

      <Modal visible={showModal}>
        <div className="containerCart">
          <div className="buttonsCart">
            <img
              onClick={clear}
              className="closeBtn"
              src="../images/emptyCart.png"
              alt="empty"
            />
            <img
              src="../images/close.png"
              className="closeBtn"
              onClick={closeCart}
              alt="close"
            />
          </div>

          {cartProducts && cartProducts.length > 0 ? (
            <ul>
              {cartProducts.map((product) => (
                <li key={product.id} className="productDetails">
                  <img
                    className="adaptive-img-cover productImg"
                    crossOrigin="anonymous"
                    src={`http://localhost:7001/public/${product.image}`}
                    alt={product.name}
                  />
                  <p>{product.name}</p>
                  <p className="updateQty">
                    <button className="quantity" onClick={() => removeOne(product)}>
                      <img src="../images/removeBtn.png" className="removeBtn" alt="remove" />
                    </button>
                    {product.quantity}
                    <button className="quantity" onClick={() => AddOne(product)}>
                      <img src="../images/addBtn.png" className="addBtn" alt="add" />
                    </button>
                  </p>
                  <p>{parseFloat(String(product.price).replace('$', '')) * product.quantity}$</p>
                  <button className="quantity" onClick={() => deleteProductFromCart(product.id)}>
                    <img src="../images/trashBin.png" className="removeBtn" alt="delete" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="emptyCartMessage">Your Cart is empty</p>
          )}

          <p className="total">
  Total : {
    (getItem("cart") || []).reduce((acc, item) => {
      const p = parseFloat(String(item.price).replace('$', '')) || 0;
      const q = item.quantity || 1;
      return acc + (p * q);
    }, 0)
  } $
</p>
          <button className="checkOut">Go To Check-out</button>
        </div>
      </Modal>
    </>
  );
};

export default Cart;