const main = () => {
  const button1 = document.querySelector(".openVideo1");
  const button2 = document.querySelector(".openVideo2");
  const button3 = document.querySelector(".openVideo3");

  button1.addEventListener("click", openVideo1);
  button2.addEventListener("click", openVideo2);
  button3.addEventListener("click", openVideo3);
  const closeVideos = document.querySelectorAll(".closeVideo");

  closeVideos.forEach((closeVideo) => {
    closeVideo.addEventListener("click", closeVideo1);
    closeVideo.addEventListener("click", closeVideo2);
    closeVideo.addEventListener("click", closeVideo3);
  });
};
const openVideo1 = () => {
  const testimonial1 = document.querySelector(".testimonial1");

  testimonial1.classList.add("showContainerVideo");
};
const openVideo2 = () => {
  const testimonial2 = document.querySelector(".testimonial2");

  testimonial2.classList.add("showContainerVideo");
};
const openVideo3 = () => {
  const testimonial3 = document.querySelector(".testimonial3");

  testimonial3.classList.add("showContainerVideo");
};
const closeVideo1 = () => {
  const testimonial1 = document.querySelector(".testimonial1");

  testimonial1.classList.remove("showContainerVideo");
};
const closeVideo2 = () => {
  const testimonial2 = document.querySelector(".testimonial2");

  testimonial2.classList.remove("showContainerVideo");
};
const closeVideo3 = () => {
  const testimonial3 = document.querySelector(".testimonial3");

  testimonial3.classList.remove("showContainerVideo");
};
window.addEventListener("load", main);
