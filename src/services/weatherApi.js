// Weather API service
const API_KEY = 'your_api_key_here';

export async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
}
Update 0 on 2014-01-09 03:37:00
Update 4 on 2014-01-09 16:20:56
Update 7 on 2014-01-09 19:15:41
