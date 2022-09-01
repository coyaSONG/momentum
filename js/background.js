const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

// function setBackground() {
//   const choosenImage = images[Math.floor(Math.random() * images.length)];
//   const bgImage = document.createElement("img");
//   bgImage.src = `img/${choosenImage}`;
//   document.body.appendChild(bgImage);
// }

// setBackground();

const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = document.createElement("img");
  image.src = `img/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();

const colorBtn = document.querySelector("#colorBtn");
colorBtn.addEventListener("click", init);
