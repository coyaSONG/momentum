const API_KEY = "dc55d3561e05426ffb020e068c301fbf";

function onGeoComplete(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:last-child");
      const city = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      console.log(data);
    });
}

function onGeoError() {
  alert("Can't find your Location Data");
}

navigator.geolocation.getCurrentPosition(onGeoComplete, onGeoError);
