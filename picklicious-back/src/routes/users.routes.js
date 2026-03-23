import { UsersController } from "../controllers/user.controller.js";
import { Router } from "express";

const initUsersRoutes=(app,sm)=>{
    const router=Router();
    router.get("/read",sm,UsersController.read)
   router.post("/sign-up",sm,UsersController.SignUp)
   router.post("/sign-in",sm,UsersController.SignIn)
    app.use("/users",router)
}
export default initUsersRoutes;