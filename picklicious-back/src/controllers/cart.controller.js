import { CartDao } from "../daos/cart.dao.js";

const AddProductToCart = async (req, res) => {
  const { userId, name, quantity, price, image } = req.body;
  const item = await CartDao.create(userId, {
    name,
    quantity,
    price,
    image,
  });

  if (!item) return res.status(400).json({ message: `cannot_add_product` });

  res.status(200).json({ item, message: "product added to cart" });
};

const UpdateCart = async (req, res) => {
  const { id, price, quantity, image, userId } = req.body;

  const updatedProduct = await CartDao.UpdateCart(
    image,
    quantity,
    price,
    id,
    userId
  );

  if (!updatedProduct)
    return res.status(400).json({ message: `cannot_update_product` });

  res.status(200).json({ updatedProduct, message: "product updated" });
};

const RemoveProductFromCart = async (req, res) => {
  const userId = req.body.userId;
  const productId = req.params.id;

  try {
    const updatedCart = await CartDao.RemoveProductFromCart(productId, userId);

    if (!updatedCart) {
      return res.status(404).json({ message: "Product not found in cart" });
    }
    return res
      .status(200)
      .json({ message: "Product removed from cart", productId: productId });
  } catch (error) {
    console.error(`Error removing product from cart: ${error}`);
    return res.status(500).json({ message: "Server error" });
  }
};

export const CartController = {
  AddProductToCart,
  RemoveProductFromCart,
  UpdateCart,
};
