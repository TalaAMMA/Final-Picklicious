import User from "../models/user.model.js";
import { formatUser, formatUsers,format_User } from "../utils/user.util.js";
import { logError } from "../utils/log.utils.js";
import {getErrors} from "../utils/errors.utils.js"

const create = async (email, first_name, last_name, password, confirm_pass) => {
  let result = null;
  let error = `user.dao - create : `;
  try {
    const user = new User({
      email,
      first_name,
      last_name,
      password,
      confirm_pass,
    });
    const createdUser = await user.save();
  error = createdUser ? null : error + `user not found`;
    result = createdUser ? formatUser(createdUser) : null;
  } catch (e) {
    error = e.errors ? error + getErrors(e.errors) : error + `${e.message}`;
  } finally {
    error ? logError(error) : () => {};
    return result;
  }
};
const readByEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email }).exec();
    return user ? format_User(user) : null;
  } catch (e) {
  logError(`user.dao - readByEmail : ${e.message}`);
    return null;
  }
};

const readAll = async () => {
  try {
    const users = await User.find();
    return users ? formatUsers(users) : null;
  } catch (e) {
    logError(`user.dao - readAll : ${e.message}`);
    return null;
  }
};


export const UserDao = {
  create,
  readAll,
  readByEmail
};
