import React, { useEffect, useState } from "react";
import { getItem, setItem } from "../../js/storage.utils.js";
import productsToInsert from "../../js/productsToInsert.js";
import handleButtonClick from "../../js/handleButtonClick.js";

const Search = () => {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState(productsToInsert);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = getItem("token");

    const config = {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: token,
      },
    };
    try {
      const response = await fetch(
        `http://localhost:7001/items/search/${query}`,
        config
      );
      const result = await response.json();
      console.log(result);
      setItem("searchedProduct", result);
      if (!result || !result.product) {
        return null;
      } else {
        return setResults(result.product);
      }
    } catch (e) {
      console.error("Problem with request :", e.message);
      return null;
    }
  };

  const handleItemClick = (item) => {
    const result = productsToInsert.find((product) => product.name === item);

    setSelectedProduct(result);
    setQuery(item);
  };

  const showSearchedProduct = () => {
    const searchResults = document.querySelector(".searched_product");
    searchResults.classList.remove("hidden");
  };

  const groupedResults = results.reduce(
    (acc, result) => {
      if (result.name && result.name.toLowerCase().includes(query)) {
        acc.names.push(result.name);
      }
      if (result.name && result.name.toLowerCase().includes(query)) {
        acc.sauces.push(result.name);
      }
      if (result.name && result.name.toLowerCase().includes(query)) {
        acc.pickles.push(result.name);
      }
      if (result.name && result.name.toLowerCase().includes(query)) {
        acc.fleurDeSel.push(result.name);
      }
      return acc;
    },
    { names: [], sauces: [], pickles: [], fleurDeSel: [] }
  );

  const [showTable, setShowTable] = useState(false);
  const [popUp, setpopUp] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    if (query === "") {
      setShowTable(false);
    }
  }, [query]);

  return (
    <div className="container-search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" Search..."
          name="search"
          className="results"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowTable(true);
          }}
          autoComplete="off"
        />

        <button type="submit" className="search">
          Search
        </button>
      </form>

      {showTable && (
        <div>
          <div className="containerTables">
            <table
              className={showTable === true ? "showTable" : "listOfSearches"}
            >
              <thead>
                <tr>
                  <th className="tablehead">All Products</th>
                </tr>
              </thead>
              <tbody>
                {groupedResults.names.map((item, id) => (
                  <tr key={id} onClick={() => handleItemClick(item, "name")}>
                    <td className="tableData" onClick={showSearchedProduct}>
                      {item}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {selectedProduct && (
            <div className="searched_product hidden">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="selectedProduct"
              />
              <div className="product-details">
                <h2>{selectedProduct.name}</h2>
                <p>{selectedProduct.price}</p>
              </div>
              <button
                className="addToCartBtn"
                onClick={() => handleButtonClick(selectedProduct, setpopUp)}
              >
                Add to Cart
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
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
