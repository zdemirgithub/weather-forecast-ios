const API_KEY = 'your_openweather_api_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const currentData = await response.json();

    const forecastResponse = await fetch(
      `${BASE_URL}forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    const forecastData = await forecastResponse.json();

    const forecast = forecastData.list
      .filter(item => item.dt_txt.includes('12:00:00'))
      .map(item => ({
        date: item.dt_txt.split(' ')[0],
        temp: item.main.temp,
        description: item.weather[0].description,
      }));

    return { current: currentData, forecast: forecast };
  } catch (error) {
    console.error(error);
    return null;
  }
}
