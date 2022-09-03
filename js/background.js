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

const IMG_NUMBER = 9;

function paintImage(imgNumber) {
  const image = document.createElement("img");
  image.src = `img/${imgNumber}.jpg`;
  image.alt = "background images";
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(Math.floor(Math.random() * images.length));
}

init();

const changeImgBtn = document.querySelector("#changeImgBtn");
changeImgBtn.addEventListener("click", init);
