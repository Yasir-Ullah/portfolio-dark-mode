let icon = document.querySelector("#icon");
icon.addEventListener("click", function () {
  document.body.classList.toggle("dark-them");
  if (document.body.classList.contains("dark-them")) {
    icon.src = "./images/sun.png";
  } else [(icon.src = "./images/moon.png")];
});
