import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./components/app/MainApp";

import GoToCategory from "./components/categoryHome/CategoryHome";
import Cart from "./components/cart/Cart.jsx";
import MainProduct from "./components/MainProducts/MainProducts";
import Search from "./components/searchBar/Search";

const injectIn = ReactDOM.createRoot;
const get = (id) => document.getElementById(id);

const main = () => {
  const account = get("rootAccount");

  const products = get("rootProducts");
  const cart = get("rootCart");
  const hoverCategories = get("GoToCategory");
  const search = get("rootSearch");

  if (account) {
    injectIn(account).render(<MainApp />);
  }
  if (products) {
    injectIn(products).render(<MainProduct />);
  }
  if (cart) {
    injectIn(cart).render(<Cart />);
  }
  if (hoverCategories) {
    injectIn(hoverCategories).render(<GoToCategory />);
  }
  if (search) {
    injectIn(search).render(<Search />);
  }
};

window.addEventListener("load", main);
