const colors = [
  "#ee7752",
  "#e73c7e",
  "#23a6d5",
  "#23d5ab",
  "#ddc7ff",
  "#ffc7c7",
  "#99a8ff",
];
const body = document.querySelector("body");
function onClickHandler() {
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  const color3 = colors[Math.floor(Math.random() * colors.length)];
  const color4 = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundImage = `linear-gradient(-45deg, ${color1}, ${color2},${color3},${color4})`;
}
onClickHandler();
const changeImgBtn = document.querySelector("#changeImgBtn");
changeImgBtn.addEventListener("click", onClickHandler);
