const mainList = () => {
  const hamburgerIcon = document.querySelector(".hamburgerIcon");
  const closeIcon = document.querySelector(".closeIcon");

  if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", toggleList);
  }
  if (hamburgerIcon) {
    closeIcon.addEventListener("click", closeList);
  }
};
const toggleList = () => {
  const list = document.querySelector(".hiddenMenu");

  list.classList.add("hiddenList");
};
const closeList = () => {
  const list = document.querySelector(".hiddenMenu");

  list.classList.remove("hiddenList");
};
window.addEventListener("load", mainList);
