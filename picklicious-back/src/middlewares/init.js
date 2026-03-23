import cors from "cors";
import helmet from "helmet";
import express from "express";

const initMiddlewares=(app)=>{
//    specify which origins can access the api(same ports)
    const corsOrigin="*";
    const corsOptions={
        origin:corsOrigin,
        
    }
    app.use(cors(corsOptions));
    app.use(helmet())
    app.use("/public",express.static('public'));
    app.use(express.json({limit:"50mb"}));
    app.use(express.urlencoded({extended:true}))
};
export default initMiddlewares;

// Acces-Control-Allow-Origin : *;