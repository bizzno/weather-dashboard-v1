# Weather Dashboard

Real-time weather dashboard application with location-based forecasts.

## Features

- Current weather conditions display
- 5-day weather forecast
- Location search and geolocation support
- Temperature, humidity, and wind speed data
- Weather icons and visual indicators
- Responsive design for mobile and desktop
- Multiple unit systems (Celsius/Fahrenheit)

## Structure

```
src/
├── components/    - React UI components (WeatherCard, Forecast)
├── services/      - Weather API integration
├── utils/         - Helper functions and formatting
└── public/        - Static assets and HTML
```

## Installation

Install dependencies:
```bash
npm install
```

## Usage

Start the development server:
```bash
npm start
```

Build for production:
```bash
npm run build
```

## Configuration

Configure your weather API key in `.env`:
```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

## Requirements

- Node.js 14.0 or higher
- React 16.8 or higher
- Weather API key (OpenWeatherMap or similar)

## License

MIT
