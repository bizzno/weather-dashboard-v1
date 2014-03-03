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
Update 46 on 2014-01-23 09:07:50
Update 52 on 2014-01-31 02:25:07
Update 56 on 2014-02-04 21:11:50
Update 62 on 2014-02-04 23:16:18
Update 67 on 2014-02-14 02:43:26
Update 75 on 2014-02-15 00:05:29
Update 77 on 2014-02-16 22:24:36
Update 78 on 2014-02-16 22:45:44
Update 79 on 2014-02-16 17:56:56
Update 83 on 2014-02-16 19:56:39
Update 93 on 2014-02-18 08:29:26
Update 94 on 2014-02-19 14:47:24
Update 95 on 2014-02-19 12:26:04
Update 98 on 2014-02-20 05:09:06
Update 107 on 2014-02-21 19:45:13
Update 110 on 2014-02-21 22:58:38
Update 118 on 2014-02-25 06:39:56
Update 123 on 2014-02-25 04:39:21
Update 128 on 2014-03-03 14:38:42
Update 131 on 2014-03-03 13:26:52
Update 132 on 2014-03-03 21:58:55
