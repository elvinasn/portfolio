import "./style.css";

const knowMe = document.querySelector(".hero__know-more");
knowMe.addEventListener("click", () => {
  document.getElementById("about-me").scrollIntoView();
});
