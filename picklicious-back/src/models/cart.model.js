import { createCollection, Schema, ObjectId } from "../models/mongoose.js";
const cartSchema = new Schema({
  productId: {
    type: ObjectId,
    ref: "Product",
    required: true,
  },
});

const Cart = createCollection("Cart", cartSchema);
export default Cart;
