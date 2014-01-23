// Weather display component
import React from 'react';

export default function WeatherCard({ data }) {
  if (!data) return <div>Loading...</div>;

  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <div className="temperature">{data.temp}°C</div>
      <div className="condition">{data.condition}</div>
    </div>
  );
}
Update 17 on 2014-01-14 23:15:15
Update 27 on 2014-01-15 15:19:15
Update 30 on 2014-01-15 18:41:05
Update 31 on 2014-01-15 17:30:31
Update 42 on 2014-01-23 23:23:33
Update 43 on 2014-01-23 21:19:27
