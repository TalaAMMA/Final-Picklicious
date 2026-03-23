import React from "react";
import { setItem } from "../../js/storage.utils.js";

const GoToCategory = () => {
  const handleClick = (category) => {
    setItem("category", category);
    window.location.href = "products.html";
  };
  return (
    <div className="categories">
      <div className="row">
        <div className="adaptive-img-cover products">
          <img src="../images/salts.jpg" alt="salts"/>
          <div className="hover-paragraph">
            <h3>Salts</h3>
            <p>
              Made of 100% natural,unrefined,unpolluted,with no preservatives
              added.
              <span className="removedText">
                Our gourmet salts have one of the highest quality salts produced
                in one of Lebanon's most ancient and renowned towns...
              </span>
            </p>
            <a>
              <button
                onClick={() => {
                  handleClick("salts");
                }}
                type="button"
                className="goButton"
              >
                Go To Salts
              </button>
            </a>
          </div>
        </div>
        <div className="adaptive-img-cover products">
          <img src="../images/sauces.jpg" alt="sauces"/>
          <div className="hover-paragraph">
            <h3>Sauces and chutneys</h3>
            <p>
              Made of 100% natural,unrefined,unpolluted,with no
              preservatives,artificial color or additives added.{" "}
              <span className="removedText">
                Our gourmet sauces and chutneys are the best match for any
                dishes or dips.Our gourmet spicy sauces and chutneys are the
                first choice for spicy lovers...
              </span>
            </p>
            <a>
              <button
                onClick={() => {
                  handleClick("sauces");
                }}
                type="button"
                className="goButton"
              >
                Go To Sauces
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="adaptive-img-cover products">
          <img src="../images/pickles.jpg" alt="pickles"/>
          <div className="hover-paragraph">
            <h3>Pickles</h3>
            <p>
              Made from the best Lebanese local vegetables and fruits and
              homemade apple cider,{" "}
              <span className="removedText">
                with a pinch of the highest quality salt produced in one of
                Lebanon's most ancient and renowned towns Anfeh...
              </span>
            </p>
            <a>
              <button
                onClick={() => {
                  handleClick("pickles");
                }}
                type="button"
                className="goButton"
              >
                Go To Pickles
              </button>
            </a>
          </div>
        </div>
        <div className="adaptive-img-cover products">
          <img src="../images/fds.jpg" alt="fleurDeSel"/>
          <div className="hover-paragraph">
            <h3>Fleur de Sel</h3>
            <p>
              Fleur de sel is the purest form of salt that forms as a thin
              delicate crust on the surface of seawater as it evaporates forming
              those shiny crystal flakes...
            </p>
            <a>
              <button
                onClick={() => {
                  handleClick("fds");
                }}
                type="button"
                className="goButton"
              >
                Go To Fleur de sel
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="smallContainerAbout">
        <p>
          Made of 100% natural,unrefined,unpolluted,with no preservatives added.
          <span className="removedText">
            Our gourmet salts have one of the highest quality salts produced in
            one of Lebanon's most ancient and renowned towns...
          </span>
        </p>
        <a>
          <button
            onClick={() => {
              handleClick("salts");
            }}
            type="button"
            className="goButton"
          >
            Go To Salts
          </button>
        </a>
        <p>
          Made of 100% natural,unrefined,unpolluted,with no
          preservatives,artificial color or additives added.{" "}
          <span className="removedText">
            Our gourmet sauces and chutneys are the best match for any dishes or
            dips.Our gourmet spicy sauces and chutneys are the first choice for
            spicy lovers...
          </span>
        </p>
        <a>
          <button
            onClick={() => {
              handleClick("sauces");
            }}
            type="button"
            className="goButton"
          >
            Go To Sauces
          </button>
        </a>
        <p>
          Made from the best Lebanese local vegetables and fruits and homemade
          apple cider,{" "}
          <span className="removedText">
            with a pinch of the highest quality salt produced in one of
            Lebanon's most ancient and renowned towns Anfeh...
          </span>
        </p>
        <a>
          <button
            onClick={() => {
              handleClick("pickles");
            }}
            type="button"
            className="goButton"
          >
            Go To Pickles
          </button>
        </a>
        <p>
          Fleur de sel is the purest form of salt that forms as a thin delicate
          crust on the surface of seawater as it evaporates forming those shiny
          crystal flakes...
        </p>
        <a>
          <button
            onClick={() => {
              handleClick("fds");
            }}
            type="button"
            className="goButton"
          >
            Go To Fleur de sel
          </button>
        </a>
      </div>
    </div>
  );
};
export default GoToCategory;
