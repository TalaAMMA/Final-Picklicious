import React, { useState } from "react";
import { FleurDeSel } from "../../js/constants.js";
import handleButtonClick from "../../js/handleButtonClick.js";

export const AllFleurDeSel = () => {
  const [popUp, setpopUp] = useState(false);

  return (
    <>
      <div className="eachCateg">
        <p className="details">
          Fleur de sel is the purest form of salt that forms as a thin delicate
          crust on the surface of seawater as it evaporates forming those shiny
          crystal flakes.
        </p>
        <p className="details">
          This salt pairs perfectly well with steaks, roasts, salads, oven
          fries, rice, roasted vegetables and much more !
        </p>
        <p className="details">
          Elevate your cooking experience when preparing a simple meal at home
          with a dash of this delicious fleur de sel. With this incredible,
          flavorful, and luscious salt you can ditch the crowded and noisy
          restaurants and instead prepare a chef-inspired meal at home.
        </p>
        <ul className="usage">
          You can also use the Fleur de sel in:
          <li>Gift sets or baskets</li>
          <li>Home cooking</li>
          <li>Garnishing</li>
        </ul>
        <p className="details">
          In order to maintain and ensure the best quality of this product store
          in a cool dry place.
        </p>
      </div>
      <div className="productsTable">
        <ul>
          {FleurDeSel.map((fleur) => {
            return (
              <li key={fleur.id}>
                <span className="adaptive-img-cover Imgs">
                  <img src={fleur.img} alt="fleur" />
                </span>
                <p>{fleur.name}</p>
                <p>{fleur.price}</p>
                <div className="containerAddToCart">
                  <button
                    className="addToCartBtn"
                    onClick={() => handleButtonClick(fleur, setpopUp)}
                  >
                    Add to cart
                  </button>

                  {popUp && (
                    <div className="popUp">
                      <img
                        className="confirmAddedProduct"
                        src="../images/coche.png"
                        alt="confirm"
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
