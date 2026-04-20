document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "2eaa1ab11ea5227025f68c1380ccb150"; // ← ここに自分のAPIキーを入れてね
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ja&units=metric`;

  if (!city) {
    alert("都市名を入力してください");
    return;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === "404") {
      showError("都市が見つかりませんでした");
      return;
    }

    showWeather(data);
  } catch (error) {
    showError("データ取得中にエラーが発生しました");
  }
}

function showWeather(data) {
  const result = document.getElementById("result");
  result.classList.remove("hidden");

  const icon = data.weather[0].icon;

  result.innerHTML = `
    <h2>${data.name}</h2>
    <img class="weather-icon" src="https://openweathermap.org/img/wn/${icon}@2x.png">
    <p>${data.weather[0].description}</p>
    <p>🌡 気温：${data.main.temp}°C</p>
    <p>💧 湿度：${data.main.humidity}%</p>
    <p>🌬 風速：${data.wind.speed} m/s</p>
  `;
}

function showError(message) {
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.innerHTML = `<p style="color:red">${message}</p>`;
}

const addBtn = document.getElementById("addFavorite");

addBtn.addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.includes(city)) {
    favorites.push(city);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderFavorites();
  }
});
