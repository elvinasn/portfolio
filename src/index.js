import "./style.scss";

const knowMe = document.querySelector(".hero__know-more");
knowMe.addEventListener("click", () => {
  document.getElementById("about-me").scrollIntoView();
});
