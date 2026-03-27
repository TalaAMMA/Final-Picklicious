import { getItem } from "./storage.utils.js";

const calculateTotal = () => {
  const cart = getItem("cart");
  let calc = 0;
  
  if (cart) {
    cart.forEach((item) => {
      // Sécurité : on transforme en texte avant de nettoyer le "$"
      // Puis on transforme le tout en nombre avec parseFloat
      const price = parseFloat(String(item.price).replace('$', ''));
        
      const quantity = item.quantity || 1;
      
      // On vérifie que price est bien un nombre avant d'ajouter
      if (!isNaN(price)) {
        calc = calc + (price * quantity);
      }
    });
  }
  
  console.log("Valeur calculée dans le fichier JS :", calc);
  return calc; 
};

export default calculateTotal;