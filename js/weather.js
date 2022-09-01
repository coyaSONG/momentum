const API_KEY = "dc55d3561e05426ffb020e068c301fbf";

function onGeoComplete(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherIcon = document.querySelector("#weatherIcon");
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weather.innerText = `${data.weather[0].main}\n${Math.floor(
        data.main.temp
      )}°`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("We can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoComplete, onGeoError);
