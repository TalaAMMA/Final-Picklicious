import { Sauces } from "../../js/constants.js";
import React from "react";
import handleButtonClick from "../../js/handleButtonClick.js";
import { useState } from "react";

export const AllSauces = () => {
  const [popUp, setpopUp] = useState(false);

  return (
    <>
      <div className="eachCateg">
        <p className="details">
          Made of 100% natural, unrefined, unpolluted, with no preservatives
          added. Our gourmet salts have one of the highest quality salts
          produced in one of Lebanon's most ancient and renowned towns. Anfeh
          has one of the most beautiful and cleanest shorelines in Lebanon.
        </p>
        <p className="details">
          Our gourmet salts are produced with the best quality local products to
          ensure the utmost delicious seasoning for your food. Our gourmet salts
          are perfect for seasoning meats, chicken, rice, French fries, grilled
          vegetables, salads, salsa dips, seafood, cakes, and much more!
        </p>
        <p className="details">
          Elevate your cooking experience when preparing a simple meal or
          sandwich at home with a dash of our delicious gourmet salts. With our
          incredible, flavorful, and luscious salts you can ditch the crowded
          and noisy restaurants and instead prepare a chef-inspired meal at
          home.
        </p>
        <ul className="usage">
          You can also use our gourmet salts in:
          <li>Gift sets or baskets</li>
          <li>Brisket rub</li>
          <li>Home cooking</li>
          <li>Grilling</li>
          <li>Rib rub</li>
          <li>Garnishing</li>
        </ul>
        <p className="details">
          In order to maintain and ensure the best quality of this product store
          in a cool dry place.
        </p>
      </div>
      <div className="productsTable">
        <ul>
          {Sauces.map((sauce) => {
            return (
              <li key={sauce.id}>
                <span className="adaptive-img-cover Imgs">
                  <img src={sauce.img} alt="sauce" />
                </span>
                <p>{sauce.name}</p>
                <p>{sauce.price}</p>
                <div className="containerAddToCart">
                  <button
                    className="addToCartBtn"
                    onClick={() => handleButtonClick(sauce, setpopUp)}
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
export default AllSauces;
