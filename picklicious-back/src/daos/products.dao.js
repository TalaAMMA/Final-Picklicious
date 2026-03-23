import { formatProduct, formatProducts } from "../utils/product.util.js";

import { logError } from "../utils/log.utils.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

const readAll = async (userId, productId) => {
  try {
    const user = User.findById(userId).exec();
    if (!user) return null;
    const product = await Product.find(productId).exec();
    return formatProducts(product);
  } catch (e) {
    logError(`product-dao - readAll : ${e.message}`);
    return null;
  }
};
export const ProductDao = {
  readAll,
};
