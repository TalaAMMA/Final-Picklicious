const mainMap = () => {
    const circle = document.querySelector(".circle");
    const map = document.querySelector(".map");
  
    circle.addEventListener("click", () => {
      map.classList.toggle("hidden");
    });
  };
  
  window.addEventListener("load", mainMap);
  