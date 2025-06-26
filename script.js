const apiKey = "7fc89c5f762a49e8a4160613252606";

function getWeather() {
  const city = document.getElementById("locationInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Weather data not found");
      }
      return response.json();
    })
    .then(data => {
      const temp = data.current.temp_c;
      const condition = data.current.condition.text;
      resultDiv.innerHTML = `
        <strong>${data.location.name}, ${data.location.country}</strong><br>
        Temperature: ${temp}°C<br>
        Condition: ${condition}
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = "Error fetching weather. Try another city.";
      console.error("Error:", error);
    });
}
