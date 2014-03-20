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
Update 133 on 2014-03-03 22:39:38
Update 137 on 2014-03-05 06:39:45
Update 138 on 2014-03-05 19:18:17
Update 142 on 2014-03-05 08:02:11
Update 145 on 2014-03-05 09:20:19
Update 147 on 2014-03-05 22:58:26
Update 151 on 2014-03-06 10:16:30
Update 152 on 2014-03-06 04:52:29
Update 155 on 2014-03-07 05:05:23
Update 156 on 2014-03-07 12:09:04
Update 166 on 2014-03-08 07:12:32
Update 167 on 2014-03-08 13:56:06
Update 168 on 2014-03-11 04:17:49
Update 175 on 2014-03-11 11:18:44
Update 178 on 2014-03-11 17:19:39
Update 182 on 2014-03-12 16:20:55
Update 185 on 2014-03-20 09:16:13
