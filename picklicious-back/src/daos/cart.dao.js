import User from "../models/user.model.js";
import { logError } from "../utils/log.utils.js";
import Product from "../models/product.model.js";
import { formatProduct } from "../utils/product.util.js";
import { formatUpdatedProduct } from "../utils/update.util.js";


const create = async (userId, product) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const newProduct = new Product({
      ...product,
    });

    const createdProduct = await newProduct.save();

    const cart = user.cart || [];
    cart.push(createdProduct);
    
    user.cart = cart;
    await User.updateOne({ _id: user._id }, { $addToSet: { cart: createdProduct._id } });

    await user.save();

    return formatProduct(createdProduct);
  } catch (e) {
    logError(`Cart.dao - AddProductToCart : ${e.message}`);
    return null;
  }
};

const UpdateCart = async (image, newQuantity, newPrice, productId, userId) => {
  try {
    const user = await User.findById(userId);
    const product = await Product.findById(productId);
    product.image = image;
    product.quantity = newQuantity;
    product.price = newPrice;

    const updatedProduct = await product.save();
    await User.updateOne({ _id: user._id }, { $pull: { cart: productId } });

    user.save();
    return formatUpdatedProduct(updatedProduct);
  } catch (e) {
    logError(`cart.dao -  UpdateQuantityInCart : ${e.message}`);
    return null;
  }
};

const RemoveProductFromCart = async (productId, userId) => {
  try {
    const user = await User.findById(userId);
    const cart = user.cart || [];

    const updatedCart = cart.filter((product) => {
      return product._id.toString() !== productId.toString();
    });

    user.cart = updatedCart;
    await user.save();

    return updatedCart;
  } catch (e) {
    logError(`Cart.dao - RemoveProductFromCart : ${e.message}`);
    return null;
  }
};

export const CartDao = {
  create,
  RemoveProductFromCart,
  UpdateCart,
};
 