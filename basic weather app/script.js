const container = document.querySelector(".display");
const input = document.querySelector("#text");
const btn = document.querySelector("#btn");
const reset = document.querySelector("#reset");

async function getweather(city) {
  const url = `https://wttr.in/${city}?format=j1`;
  const responce = await fetch(url);
  const data = await responce.json();
  return data;
}

async function showweather() {
  const city = input.value.trim();

  if (city == "") {
    container.innerHTML = `<P>Please enter a city name </p>`;
    return;
  }

  container.innerHTML = `<p>⏳ Fetching weather...</p>`;

  try {
    const data = await getweather(city);

    const condition = data.weather[0].avgtempC;
    const current = data.current_condition[0].weatherDesc[0].value;
    const population = data.nearest_area[0].population;

    //clear , reset

    const clear = document.createElement("button");

    clear.innerText = "clear";

    const newdiv = document.createElement("div");
    newdiv.innerHTML = `
  <h2> Weather in ${city}</h2>
  <p>🌡 Temperature: ${condition}°C</p>
      <p>📋 Condition: ${current}</p>
        <p>📋 population: ${population}</p>
  `;

    newdiv.appendChild(clear);
    container.innerHTML = "";

    container.appendChild(newdiv);

    //clear logic
    clear.addEventListener("click", () => {
      alert("are you sure");
      clear.parentElement.remove();
    });

    input.value = "";
  } catch (error) {
    container.innerHTML = `<P>failed to fetch api </p>`;
    console.error(error);
  }
}

btn.addEventListener("click", () => {
  showweather();
});
btn.addEventListener("keypress", (e) => {
  if (e.key === "enter") showweather();
});

reset.addEventListener("click", () => {
  container.innerHTML = "";
});
