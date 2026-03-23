import mongoose from "mongoose";


const uri = process.env.MONGODB_URI || "mongodb://0.0.0.0:27017";

const initDB = async()=>{
    try{
        await new mongoose.connect(uri,{dbName:"picklicious"})
        console.log("Database Connected")
    }catch(e){
        console.log("Connection Problem : " , e.message);
    }
}
export default initDB;
