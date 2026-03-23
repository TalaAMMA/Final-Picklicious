const images = [
  "../images/AL_MAWSAM.png",
  "../images/byroots.jpg",
  "../images/convivio.png",
  "../images/IrAP.png",
  "../images/made_by_nature.png",
  "../images/souk_el_balad.png"
];

let i = 0;

function slideShow() {
  const imgElement = document.getElementById("image");
  
  if (imgElement) {
    console.log("Tentative d'affichage de : " + images[i]); // Pour vérifier dans la console
    imgElement.src = images[i];
    
    i = (i + 1) % images.length; // Méthode plus propre pour boucler
  } else {
    console.error("ERREUR : La balise avec l'id 'image' est introuvable !");
  }
}

// On attend que tout soit chargé, puis on lance
window.onload = () => {
  slideShow();
  setInterval(slideShow, 3000); // Utilise setInterval plutôt que setTimeout récursif
};