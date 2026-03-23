import React, { useState } from "react";
import handleButtonClick from "../../js/handleButtonClick.js";
import { Pickles } from "../../js/constants.js";

export const AllPickles = () => {
  const [popUp, setpopUp] = useState(false);
  return (
    <>
      <div className="eachCateg">
        <p className="details">
          Made from the best Lebanese local vegetables and fruits and homemade
          apple cider, with a pinch of the highest quality salt produced in one
          of Lebanon's most ancient and renowned towns Anfeh.
        </p>
        <p className="details">
          Made of 100 % no preservatives, artificial color or additives added.
          Our gourmet pickles are produced with the best quality local products
          to ensure the utmost delicious flavor.
        </p>
        <p className="details">
          Our gourmet pickles are a perfect addition to any salad, or as a side
          dish for any traditional Lebanese dishes or international platters.
          Our gourmet pickles pairs perfectly well with chicken, rice, grilled
          vegetables, meat, salads, seafood, sandwiches, international cuisine
          and much more! Our gourmet pickle brine is full of tasteful flavors
          and natural ingredients and could be used as a dressing for any salad
          or a marinate for chicken and meat.
        </p>
        <ul className="usage">
          You can also use our gourmet pickles in:
          <li>Gift sets or baskets</li>
          <li>Side dishes </li>
          <li>On salads </li>
          <li>For marinades</li>
          <li>Garnishing</li>
        </ul>
        <p className="details">
          In order to maintain and ensure the best quality of this product store
          in a cool dry place. Once opened, refrigerate and do not pick with
          your hands. Use clean cutlery to ensure freshness and crispness.
        </p>
      </div>
      <div className="productsTable">
        <ul>
          {Pickles.map((pickle) => {
            return (
              <li key={pickle.id}>
                <span className="adaptive-img-cover Imgs">
                  <img src={pickle.img} alt="pickles" />
                </span>
                <p>{pickle.name}</p>
                <p>{pickle.price}</p>
                <div className="containerAddToCart">
                  <button
                    className="addToCartBtn"
                    onClick={() => handleButtonClick(pickle, setpopUp)}
                  >
                    Add to cart
                  </button>

                  {popUp && (
                    <div className="popUp">
                      <img
                        className="confirmAddedProduct"
                        src="../images/coche.png"
                        alt="check"
                      />
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default AllPickles;
