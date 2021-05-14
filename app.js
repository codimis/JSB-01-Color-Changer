const text = document.getElementById("text");
const btn = document.getElementById("btn");
const genBG = document.querySelector(".left");
const colorBox1 = document.getElementById("color-1");
const colorBox2 = document.getElementById("color-2");
const colorBox3 = document.getElementById("color-3");
const colorBox4 = document.getElementById("color-4");
const colorBox5 = document.getElementById("color-5");
const colorBox6 = document.getElementById("color-6");
const codeGenArr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const randomColorCode = () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += codeGenArr[Math.floor(Math.random() * codeGenArr.length)];
  }
  return hexCode;
};

btn.addEventListener("click", () => {
  const colorCode = randomColorCode();
  text.innerText = colorCode;
  genBG.style.backgroundColor = colorCode;
});

colorBox1.addEventListener("click", () => {
  colorBox1.style.backgroundColor = genBG.style.backgroundColor;
});
colorBox2.addEventListener("click", () => {
  colorBox2.style.backgroundColor = genBG.style.backgroundColor;
});
colorBox3.addEventListener("click", () => {
  colorBox3.style.backgroundColor = genBG.style.backgroundColor;
});
colorBox4.addEventListener("click", () => {
  colorBox4.style.backgroundColor = genBG.style.backgroundColor;
});
colorBox5.addEventListener("click", () => {
  colorBox5.style.backgroundColor = genBG.style.backgroundColor;
});
colorBox6.addEventListener("click", () => {
  colorBox6.style.backgroundColor = genBG.style.backgroundColor;
});
