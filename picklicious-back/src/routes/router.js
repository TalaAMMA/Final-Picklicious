import initUsersRoutes from "./users.routes.js";
import initProductRoutes from "./products.routes.js";
import { sanitizeMiddleware } from "../middlewares/sanitize.middleware.js";
import initCartRoutes from "./cart.routes.js";

const initRoutes=(app)=>{
 initUsersRoutes(app,sanitizeMiddleware); 
 initProductRoutes(app,sanitizeMiddleware) ;
 initCartRoutes(app,sanitizeMiddleware); 
}
export default initRoutes;