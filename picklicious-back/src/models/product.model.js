import { createCollection, Schema, ObjectId } from "../models/mongoose.js";
import { ERRORS } from "../utils/errors.utils.js";
const productSchema = new Schema(
  {
    name: { type: String, required: [true, ERRORS.required] },
    quantity: { type: Number, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Product = createCollection("Product", productSchema);

export default Product;
