let container = document.createElement("div");
container.className = "container";
let head = document.createElement("div");
head.className = "head";
head.innerHTML = `
<input type="text" class="city" placeholder="Enter your city here" />
<button class="search" onclick="search()">Search</button>

`;
document.body.append(container);
container.append(head);

let cities = document.querySelector(".city");
let button = document.querySelector(".search");

// let city = "chennai";
function search() {
  city = cities.value;
  cities.value = "";
  getData();
}
// let city = "chennai";
const getData = async () => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=367261ea67167733e6e17d88b7110e22`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    getDetails(data);
    // console.log(data);
  } catch (err) {
    let da = document.createElement("div");
    da.className = "temp";
    da.innerHTML = `<h3>Error</h3>`;
    container.append(da);
    alert("not valid");
  }
};
function getDetails(data) {
  console.log(data);

  let dateTime = new Date().toDateString();
  let cityName = data.name;
  let weatherState = data.weather[0].main;
  let temperature = Math.floor(data.main.temp);
  let windSpeed = data.wind.speed;
  let info = document.createElement("div");
  console.log(cityName);
  info.className = "info";

  info.innerHTML = `<div>
                        <h1 class="time">${dateTime}</h1>
                    </div>
                    <div class="content">
                        <p class="temp">Area : <span id="area">${cityName}</span></p>
                        <p class="temp">Weather :<span id="wState">${weatherState}</span></p>
                        <p class="temp">Temperature : <span id="temp">${
                          temperature - 273
                        }</span></p>
                        <p class="temp">Wind : <span id="wind">${windSpeed}</span></p>
                    </div>
`;
  // let todayTime = document.querySelector(".time");
  // let area = document.querySelector("#area");
  // let wState = document.querySelector("#wState");
  // let temp = document.querySelector("#temp");
  // let wind = document.querySelector("#wind");
  container.append(info);
}

// getData("madurai");

// search.addEventListener("click", function () {
//   let url =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     cities.value +
//     "&appid=367261ea67167733e6e17d88b7110e22";
//   fetch(url)
//     .then((response) => response.json())
//     .then((details) => {
//       let dateTime = new Date().toDateString();
//       let cityName = details.name;
//       let weatherState = details.weather[0].main;
//       let temperature = Math.floor(details.main.temp);
//       let windSpeed = details.wind.speed;
//       todayTime.innerText = dateTime;
//       area.innerText = `${cityName}`;
//       if (weatherState === "Clouds") {
//         src = "assets/icon.png";
//       } else if (weatherState === "Rain") src = "assets/rain.png";
//       else src = "assets/sunny.png";
//       wState.innerHTML = `${weatherState}<img class="cloud" src=${src}> `;
//       temp.innerHTML = `${temperature - 273} &#176; C`;
//       wind.innerHTML = `${windSpeed} Kmph`;

//       console.log(cityName);
//       console.log(weatherState);
//       console.log(temperature);
//       console.log(windSpeed, "Kmph");
//     })

//     .catch((err) => alert("wrong city name"));
// });
