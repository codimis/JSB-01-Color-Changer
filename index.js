const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");
const containerTop = document.querySelector(".container-top");
const colorBox = document.querySelectorAll(".colorbox");
const colorBoxColor = document.querySelector(".colorbox-color");
const containerBottom = document.querySelector(".container-bottom");
const buttonBottom = document.querySelectorAll(".btn-bottom");

const randomColorGenerator = function () {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[Math.floor(Math.random() * hex.length)];
  }
  return hexCode;
};
randomColorGenerator();

document.addEventListener("DOMContentLoaded", function () {
  color.textContent = randomColorGenerator();
  document.body.style.backgroundColor = randomColorGenerator();
});

button.addEventListener("click", function () {
  color.textContent = randomColorGenerator();
  document.body.style.backgroundColor = randomColorGenerator();
});

buttonBottom.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let colorboxText = e.target.parentElement.children[0].firstElementChild;
    if (
      colorboxText.textContent ===
      `Favorite Color - ${e.target.parentElement.id.slice(-1)}`
    ) {
      e.target.closest(".colorbox").style.backgroundColor =
        document.body.style.backgroundColor;
      colorboxText.textContent = `Color ${e.target.parentElement.id.slice(
        -1
      )}: ${color.textContent}`;
      e.target.textContent = "Use Me";
    } else {
      document.body.style.backgroundColor = e.target.parentElement
        .getAttribute("style")
        .slice(18, -1);
      color.textContent = colorboxText.textContent.slice(9);
      colorboxText.textContent = `Favorite Color - ${e.target.parentElement.id.slice(
        -1
      )}`;
      e.target.closest(".colorbox").style.backgroundColor = null;
      e.target.textContent = "Save Me";
    }
  });
});
