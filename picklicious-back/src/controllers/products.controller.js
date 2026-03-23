import { ProductDao } from "../daos/products.dao.js";
import productsToInsert from "../js/productsToInsert.js";

const getProductByName = async (req, res) => {
  const name = req.params.name;
  
  
  const result = productsToInsert.find((product) => product.name === name);

  if (!result) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({ data: result });
};

const readAll = async (req, res) => {
  const items = await ProductDao.readAll();
  if (!items) return res.status(400).json({ message: "cant retrieve items" });
  res.status(200).json({ items });
};
export const ProductsController = {
  getProductByName,
  readAll,
};
