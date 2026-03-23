import { Router } from "express";
import { jwtMiddleware } from "../middlewares/jwt.midlleware.js";
import { CartController } from "../controllers/cart.controller.js";

const initCartRoutes = (app, sm) => {
  const router = Router();

  router.post(
    "/AddProductToCart",
    jwtMiddleware,
    sm,
    CartController.AddProductToCart
  );
  router.delete(
    "/RemoveProductFromCart/:id",
    jwtMiddleware,
    sm,
    CartController.RemoveProductFromCart
  );

  router.put("/UpdateCart", jwtMiddleware, sm, CartController.UpdateCart);
  app.use("/cart", router);
};
export default initCartRoutes;
