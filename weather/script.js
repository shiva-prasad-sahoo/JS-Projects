async function getWeather(city) {
  const url = `https://wttr.in/${city}?format=j1`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch weather for ${city}`);

    const data = await response.json();
    return {
      city,
      temp: data.current_condition[0].temp_C,
      condition: data.current_condition[0].weatherDesc[0].value,
    };
  } catch (error) {
    return { city, error: error.message };
  }
}

async function showWeatherForCities() {
  const cities = ["Delhi", "London", "New York"];
  const container = document.getElementById("weather-container");

  try {
    const weatherData = await Promise.all(cities.map(getWeather));

    weatherData.forEach((weather) => {
      const card = document.createElement("div");
      card.className = "card";

      if (weather.error) {
        card.innerHTML = `
          <h2>${weather.city}</h2>
          <p>❌ Error: ${weather.error}</p>
        `;
      } else {
        card.innerHTML = `
          <h2>${weather.city}</h2>
          <p>🌡️ Temp: ${weather.temp}°C</p>
          <p>🌥️ Condition: ${weather.condition}</p>
        `;
      }

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Failed to load weather:", err);
  }
}

showWeatherForCities();
