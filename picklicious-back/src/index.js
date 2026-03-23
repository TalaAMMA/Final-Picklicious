import express from "express";
import initMiddlewares from "./middlewares/init.js";
import initRoutes from "./routes/router.js";
import initDB from "./config/database.config.js";

const app = express();


const PORT = process.env.PORT || 5001;


app.get("/",(req,res)=>{
    res.send("")
});

await initDB();
initMiddlewares(app);
initRoutes(app);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});