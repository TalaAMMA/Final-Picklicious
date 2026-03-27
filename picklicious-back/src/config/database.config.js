import mongoose from "mongoose";

// On met le lien direct pour être 100% sûre que ça passe
const uri = "mongodb+srv://talaissa51_db_user:mongopassta@cluster0.l4quwwz.mongodb.net/picklicious?retryWrites=true&w=majority";

const initDB = async () => {
    try {
        // On enlève les options inutiles, Mongoose s'occupe de tout
        await mongoose.connect(uri);
        console.log("✅ ENFIN ! Database Connected to Atlas");
    } catch (e) {
        console.log("❌ Erreur de connexion : ", e.message);
    }
}

export default initDB;