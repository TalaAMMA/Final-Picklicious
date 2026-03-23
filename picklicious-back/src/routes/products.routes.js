import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";
import { jwtMiddleware } from "../middlewares/jwt.midlleware.js";

const initProductRoutes = (app, sm) => {
  const router = Router();

  router.get("/search/:name", ProductsController.getProductByName);
  router.get("/readAll", ProductsController.readAll);
  app.use("/items", router);
};
export default initProductRoutes;
