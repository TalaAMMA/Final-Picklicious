import { emailIsValid } from "../utils/regex.utils.js";
import { createCollection, Schema, ObjectId } from "../models/mongoose.js";
import { ERRORS } from "../utils/errors.utils.js";

const userSchema = new Schema(
  {
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: {
      type: String,
      require: [true, ERRORS.required],
      unique: true,
      lowercase: true,
      validate: {
        validator: emailIsValid,
        message: ERRORS.notValid,
      },
    },
    password: { type: String, require: [, ERRORS.required], minlength: 6 },
    confirm_pass: { type: String, require: true },
    cart: [{ type: Schema.Types.ObjectId, ref: "Cart" }],
  },
  {
    timestamps: true,
  }
);

const User = createCollection("User", userSchema);
export default User;
