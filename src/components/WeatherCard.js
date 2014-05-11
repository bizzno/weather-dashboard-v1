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
Update 188 on 2014-03-20 15:11:14
Update 190 on 2014-03-26 06:53:52
Update 191 on 2014-03-26 05:18:27
Update 193 on 2014-03-26 02:10:36
Update 198 on 2014-03-31 20:25:41
Update 200 on 2014-03-31 07:30:53
Update 201 on 2014-03-31 14:41:03
Update 202 on 2014-04-03 02:00:45
Update 206 on 2014-04-03 19:30:11
Update 210 on 2014-04-05 09:19:34
Update 217 on 2014-04-10 00:32:33
Update 221 on 2014-04-11 15:34:33
Update 228 on 2014-04-11 21:06:00
Update 233 on 2014-04-13 06:21:58
Update 240 on 2014-04-17 19:11:54
Update 241 on 2014-04-17 05:44:01
Update 244 on 2014-04-17 04:28:33
Update 253 on 2014-04-18 15:45:59
Update 258 on 2014-04-18 11:51:23
Update 259 on 2014-04-18 17:54:08
Update 260 on 2014-04-18 21:26:09
Update 262 on 2014-04-22 17:04:01
Update 263 on 2014-04-24 01:47:46
Update 264 on 2014-04-24 13:37:25
Update 265 on 2014-04-24 08:39:09
Update 269 on 2014-04-25 20:20:49
Update 273 on 2014-04-25 16:19:06
Update 274 on 2014-04-27 15:47:17
Update 275 on 2014-04-27 11:13:37
Update 276 on 2014-04-27 15:11:56
Update 279 on 2014-04-27 01:29:55
Update 285 on 2014-04-28 15:27:38
Update 286 on 2014-04-28 20:01:56
Update 289 on 2014-04-28 02:53:11
Update 292 on 2014-04-28 13:00:09
Update 294 on 2014-04-28 05:29:44
Update 297 on 2014-04-29 09:42:48
Update 299 on 2014-04-29 06:45:24
Update 301 on 2014-04-29 23:50:30
Update 311 on 2014-04-30 09:11:45
Update 319 on 2014-05-08 18:46:06
Update 325 on 2014-05-08 07:07:09
Update 328 on 2014-05-09 14:23:36
Update 335 on 2014-05-09 10:46:22
Update 338 on 2014-05-11 07:17:43
Update 340 on 2014-05-11 07:35:03
Update 344 on 2014-05-11 14:35:41
