import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import AllPickles from "../allPickles/AllPickles.jsx";
import { AllFleurDeSel } from "../allFleurDeSel/AllFleurDeSel.jsx";
import { AllSalts } from "../allSalts/AllSalts.jsx";
import AllSauces from "../allSauces/AllSauces.jsx";
import { getItem } from "../../js/storage.utils.js";

const INITIAL_STATE = {
  salts: "salts",
  fds: "fds",
  sauces: "sauces",
  pickles: "pickles",
};
const MainProduct = () => {
  const [initialState, setInitialState] = useState(INITIAL_STATE.salts);
  useEffect(() => {
    const category = getItem("category");
    console.log(category);
    setInitialState(INITIAL_STATE[category ? category : "salts"]);
  }, []);

  return (
    <>
      <nav className="navCategories">
        <button
          type="button"
          className={
            initialState === INITIAL_STATE.salts
              ? "flashedBtn"
              : "navCategories"
          }
          onClick={() => setInitialState(INITIAL_STATE.salts)}
        >
          Salts
        </button>
        <button
          type="button"
          className={
            initialState === INITIAL_STATE.fds ? "flashedBtn" : "navCategories"
          }
          onClick={() => setInitialState(INITIAL_STATE.fds)}
        >
          Fleur De Sel
        </button>
        <button
          type="button"
          className={
            initialState === INITIAL_STATE.sauces
              ? "flashedBtn"
              : "navCategories"
          }
          onClick={() => setInitialState(INITIAL_STATE.sauces)}
        >
          Sauces and Chutneys
        </button>
        <button
          type="button"
          className={
            initialState === INITIAL_STATE.pickles
              ? "flashedBtn"
              : "navCategories"
          }
          onClick={() => setInitialState(INITIAL_STATE.pickles)}
        >
          Pickles
        </button>
      </nav>
      <div className="switchCategories">
        {initialState === INITIAL_STATE.salts && <AllSalts />}
        {initialState === INITIAL_STATE.fds && <AllFleurDeSel />}
        {initialState === INITIAL_STATE.sauces && <AllSauces />}
        {initialState === INITIAL_STATE.pickles && <AllPickles />}
      </div>
    </>
  );
};

export default MainProduct;
