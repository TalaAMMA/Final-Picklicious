import { emailIsValid } from "../utils/regex.utils.js";
import { stringIsFilled } from "../utils/string.util.js";
import { jwtSign } from "../utils/jwt.utils.js";
import { UserDao } from "../daos/user.dao.js";

const SignUp = async (req, res) => {
  const { email, first_name, last_name, password, confirm_pass } = req.body;

  if (!confirm_pass || password !== confirm_pass) {
    return res.status(405).json({ message: "Password does not match" });
  }
  if (!emailIsValid(email)) {
    return res.status(400).json({ message: "email is not valid" });
  }

  const user = await UserDao.create(
    email,
    first_name,
    last_name,
    password,
    confirm_pass
  );

  if (!user) return res.status(403).json({ message: "already_exists" });
  const token = jwtSign(user.id);
  res.status(201).json({ message: "user_created", user, token });
};
const SignIn = async (req, res) => {
const {email,password}=req.body;

  if (!stringIsFilled(email) || !stringIsFilled(password)) {
    return res.status(404).json({ message: "invalid_data" });
  }

  const user = await UserDao.readByEmail(email);
  if (user && user.password === password) {
    const token = jwtSign(user.id);
    res.status(200).json({ message: "successfully_logged_in", user, token });
  } else {
    res.status(401).json({ message: "login_failed" });
  }
};
const read = async (req, res) => {
  const users = await UserDao.readAll();
  if (!users) return res.status(400).json({ message: `can't retrieve users` });
  res.status(200).json({ users });
};

export const UsersController = {
  SignUp,
  SignIn,
  read,
};
