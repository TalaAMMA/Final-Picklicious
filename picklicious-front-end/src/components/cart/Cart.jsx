import Modal from "../modal/Modal.jsx";
import React, { useEffect, useState } from "react";
import { getItem, removeItem, setItem } from "../../js/storage.utils.js";
import UpdateCart from "../../api/items/update.api.js";
import sortByName from "../../js/sort.util.js";
import deleteOne from "../../api/items/delete.api.js";
import read from "../../api/items/read.api.js";
import calculateTotal from "../../js/totalcalcul.js";

const Cart = () => {
  const cart = getItem("cart");
  const showCart = () => {
    const cart = getItem("cart");

    setCartProducts(cart);
    let calc = calculateTotal();
    setTotal(calc);
    setshowModal(true);
  };

  const closeCart = () => {
    setshowModal(false);
  };

  const AddOne = async (product) => {
    const updatedProduct = {
      ...product,
      image: product.image,
      quantity: parseFloat(product.quantity) + 1,
      price:
        parseFloat(product.price) / product.quantity +
        parseFloat(product.price),
    };

    const updateCart = await UpdateCart(updatedProduct);

    setItem("cart", updateCart);
    showCart();
  };
  const removeOne = async (product) => {
    const updatedProduct = {
      ...product,
      quantity: parseFloat(product.quantity - 1),
      price:
        parseFloat(product.price) -
        parseFloat(product.price) / product.quantity,
      image: product.image,
    };

    const updateCart = await UpdateCart(updatedProduct);
    if (updatedProduct.price >= 1) {
      setItem("cart", updateCart);
    }
    showCart();
  };
  const deleteProductFromCart = async (productId) => {
    const updatedCart = await deleteOne(productId);
    setItem("cart", updatedCart);
    showCart();
  };

  const clear = () => {
    const cart = getItem("cart");
    if (!cart) return;

    if (cart) {
      cart.forEach(() => {
        setTotal(0);
      });
    }
    localStorage.removeItem("cart");
    setCartProducts([]);
  };

  const maxQuantity = () => {
    const max = document.querySelector(".maxQuantity");
    max.classList.remove(".hidden");
  };

  const [total, setTotal] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [showModal, setshowModal] = useState(false);
  
  const [items, setitems] = useState([]);
  useEffect(() => {
    const deletedProductId = getItem("deletedProductId");

    if (deletedProductId) {
      const updatedProducts = cartProducts.filter(
        (product) => product.id !== deletedProductId
      );

      setCartProducts(updatedProducts);

      removeItem("deletedProductId");
    }
  }, [cartProducts]);
  useEffect(() => {
    const cart = getItem("cart");
    if (cart) {
      deleteOne(cart.id);
    }
  }, []);
  useEffect(() => {
    const getItems = async () => {
      const items = await read(cart);
      items ? setitems(items) : logout();
    };
    getItems();
  }, []);

  useEffect(() => {
    let calc = calculateTotal();
    setTotal(calc);
  }, [showModal]);

  useEffect(() => {
    const cart = getItem("cart");

    if (cart) {
      setCartProducts(sortByName(cart));
    }
  }, []);
 

  return (
    <>
      <div className="adaptive-img-cover  productBasket" onClick={showCart}>
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
              alt="closeBtn"
            />
            <img
              src="../images/close.png"
              className="closeBtn"
              onClick={closeCart}
              alt="closeBtn"
            />
          </div>
          {cartProducts && cartProducts.length > 0 ? (
            <ul>
              {sortByName(cartProducts).map((product) => {
                return (
                  <li key={product.id} className="productDetails">
                    <img
                      className="adaptive-img-cover productImg"
                      crossOrigin="anonymous"
                      src={`http://localhost:7001/public/${product.image}`}
                      alt="productImg"
                    />

                    <p>{product.name}</p>

                    <p className="updateQty">
                      <button
                        className="quantity"
                        onClick={() => removeOne(product)}
                      >
                        <img
                          src="../images/removeBtn.png"
                          className="removeBtn"
                          alt="removeBtn"
                        />
                      </button>

                      {product.quantity}
                      <button
                        className="quantity"
                        onClick={() => {
                          if (product.quantity < 5) {
                            AddOne(product);
                          } else {
                            maxQuantity();
                          }
                        }}
                      >
                        <img
                          src="../images/addBtn.png"
                          className="addBtn"
                          alt="addBtn"
                        />
                      </button>
                      {product.quantity === 5 && (
                        <span className="maxQuantity">Max. qty reached</span>
                      )}
                    </p>

                    <p>{`${parseFloat(product.price)}$`}</p>
                    <button
                      className="quantity"
                      onClick={() => deleteProductFromCart(product.id)}
                    >
                      <img
                        src="../images/trashBin.png"
                        className="removeBtn"
                        alt="trashBin"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="emptyCartMessage">Your Cart is empty</p>
          )}

          <p className="total">Total : {total}$</p>
          <button className="checkOut">Go To Check-out</button>
        </div>
      </Modal>
    </>
  );
};
export default Cart;
