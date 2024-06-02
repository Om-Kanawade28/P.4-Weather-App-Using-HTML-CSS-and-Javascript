const apiKey = "fd4790d0c44e417e226cee62a6af365a";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    async function checkWeather(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      const data = await response.json();

      if (data.cod !== 200) {
        // City not found
        console.error("City not found");
        document.querySelector(".city").innerHTML = "City Not Found";
        return;  // Exit the function if city not found
      }

      console.log(data);

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

      // Update weather icon based on data.weather[0].main (assuming weather condition is in the first element of the weather array)
      document.querySelector(".weather-icon").src = `images/${data.weather[0].main}.png`; // Assuming image filenames match weather conditions
    }

    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
    });