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
Update 24 on 2014-01-14 05:58:03
Update 25 on 2014-01-14 06:12:41
Update 28 on 2014-01-15 00:01:30
Update 35 on 2014-01-15 21:03:16
Update 44 on 2014-01-23 09:21:16
Update 47 on 2014-01-23 02:32:51
Update 49 on 2014-01-24 08:04:56
