import React from 'react'
import WeatherBasicDetails from 'components/weather/WeatherBasicDetails'
import WeatherAdvancedDetails from 'components/weather/WeatherAdvancedDetails'
import WeatherForecast from 'components/weather/WeatherForecast'
import bg from 'assets/images/bg.jpg'
import ns from 'assets/images/ns.jpg'

const cities = [
  {
    id: 1,
    name: 'Blegrade',
    image: bg
  },
  {
    id: 2,
    name: 'Novi Sad',
    image: ns
  }
]

const forecasts = [{ "time": 1536184800, "summary": "Partly cloudy until evening.", "icon": "partly-cloudy-day", "sunriseTime": 1536206866, "sunsetTime": 1536253697, "moonPhase": 0.88, "precipIntensity": 0.0034, "precipIntensityMax": 0.022, "precipIntensityMaxTime": 1536184800, "precipProbability": 0.33, "precipType": "rain", "temperatureHigh": 81.15, "temperatureHighTime": 1536242400, "temperatureLow": 58.95, "temperatureLowTime": 1536289200, "apparentTemperatureHigh": 81.42, "apparentTemperatureHighTime": 1536242400, "apparentTemperatureLow": 58.95, "apparentTemperatureLowTime": 1536289200, "dewPoint": 59.39, "humidity": 0.73, "pressure": 1012.31, "windSpeed": 5.45, "windGust": 15.7, "windGustTime": 1536188400, "windBearing": 267, "cloudCover": 0.31, "uvIndex": 5, "uvIndexTime": 1536224400, "visibility": 9.03, "ozone": 303.03, "temperatureMin": 60.35, "temperatureMinTime": 1536202800, "temperatureMax": 81.15, "temperatureMaxTime": 1536242400, "apparentTemperatureMin": 60.78, "apparentTemperatureMinTime": 1536202800, "apparentTemperatureMax": 81.42, "apparentTemperatureMaxTime": 1536242400 }, { "time": 1536271200, "summary": "Partly cloudy starting in the afternoon.", "icon": "partly-cloudy-night", "sunriseTime": 1536293337, "sunsetTime": 1536339985, "moonPhase": 0.92, "precipIntensity": 0, "precipIntensityMax": 0.0002, "precipIntensityMaxTime": 1536332400, "precipProbability": 0, "temperatureHigh": 82.1, "temperatureHighTime": 1536328800, "temperatureLow": 63.43, "temperatureLowTime": 1536372000, "apparentTemperatureHigh": 82.1, "apparentTemperatureHighTime": 1536328800, "apparentTemperatureLow": 63.43, "apparentTemperatureLowTime": 1536372000, "dewPoint": 53.81, "humidity": 0.58, "pressure": 1012.07, "windSpeed": 3.61, "windGust": 9.05, "windGustTime": 1536278400, "windBearing": 290, "cloudCover": 0.3, "uvIndex": 6, "uvIndexTime": 1536314400, "visibility": 10, "ozone": 291.08, "temperatureMin": 58.95, "temperatureMinTime": 1536289200, "temperatureMax": 82.1, "temperatureMaxTime": 1536328800, "apparentTemperatureMin": 58.95, "apparentTemperatureMinTime": 1536289200, "apparentTemperatureMax": 82.1, "apparentTemperatureMaxTime": 1536328800 }, { "time": 1536357600, "summary": "Mostly cloudy until afternoon.", "icon": "partly-cloudy-day", "sunriseTime": 1536379807, "sunsetTime": 1536426273, "moonPhase": 0.95, "precipIntensity": 0.0011, "precipIntensityMax": 0.0097, "precipIntensityMaxTime": 1536418800, "precipProbability": 0.05, "precipType": "rain", "temperatureHigh": 81.24, "temperatureHighTime": 1536411600, "temperatureLow": 61.36, "temperatureLowTime": 1536465600, "apparentTemperatureHigh": 81.24, "apparentTemperatureHighTime": 1536411600, "apparentTemperatureLow": 61.36, "apparentTemperatureLowTime": 1536465600, "dewPoint": 55.93, "humidity": 0.61, "pressure": 1016.25, "windSpeed": 6.23, "windGust": 14.34, "windGustTime": 1536415200, "windBearing": 299, "cloudCover": 0.43, "uvIndex": 6, "uvIndexTime": 1536400800, "visibility": 10, "ozone": 297.59, "temperatureMin": 63.43, "temperatureMinTime": 1536372000, "temperatureMax": 81.24, "temperatureMaxTime": 1536411600, "apparentTemperatureMin": 63.43, "apparentTemperatureMinTime": 1536372000, "apparentTemperatureMax": 81.24, "apparentTemperatureMaxTime": 1536411600 }, { "time": 1536444000, "summary": "Mostly cloudy starting in the afternoon, continuing until evening.", "icon": "partly-cloudy-day", "sunriseTime": 1536466277, "sunsetTime": 1536512560, "moonPhase": 0.99, "precipIntensity": 0.0001, "precipIntensityMax": 0.0003, "precipIntensityMaxTime": 1536444000, "precipProbability": 0.03, "precipType": "rain", "temperatureHigh": 78.54, "temperatureHighTime": 1536498000, "temperatureLow": 59.22, "temperatureLowTime": 1536548400, "apparentTemperatureHigh": 78.54, "apparentTemperatureHighTime": 1536498000, "apparentTemperatureLow": 59.22, "apparentTemperatureLowTime": 1536548400, "dewPoint": 54.65, "humidity": 0.62, "pressure": 1019.61, "windSpeed": 5.98, "windGust": 14.04, "windGustTime": 1536501600, "windBearing": 312, "cloudCover": 0.34, "uvIndex": 5, "uvIndexTime": 1536483600, "visibility": 10, "ozone": 303.62, "temperatureMin": 61.36, "temperatureMinTime": 1536465600, "temperatureMax": 78.54, "temperatureMaxTime": 1536498000, "apparentTemperatureMin": 61.36, "apparentTemperatureMinTime": 1536465600, "apparentTemperatureMax": 78.54, "apparentTemperatureMaxTime": 1536498000 }, { "time": 1536530400, "summary": "Clear throughout the day.", "icon": "clear-day", "sunriseTime": 1536552747, "sunsetTime": 1536598847, "moonPhase": 0.03, "precipIntensity": 0, "precipIntensityMax": 0.0001, "precipIntensityMaxTime": 1536548400, "precipProbability": 0, "temperatureHigh": 80.48, "temperatureHighTime": 1536588000, "temperatureLow": 60.51, "temperatureLowTime": 1536634800, "apparentTemperatureHigh": 80.48, "apparentTemperatureHighTime": 1536588000, "apparentTemperatureLow": 60.51, "apparentTemperatureLowTime": 1536634800, "dewPoint": 52.87, "humidity": 0.59, "pressure": 1021.44, "windSpeed": 4.65, "windGust": 9.82, "windGustTime": 1536588000, "windBearing": 339, "cloudCover": 0.01, "uvIndex": 6, "uvIndexTime": 1536573600, "visibility": 10, "ozone": 302.91, "temperatureMin": 59.22, "temperatureMinTime": 1536548400, "temperatureMax": 80.48, "temperatureMaxTime": 1536588000, "apparentTemperatureMin": 59.22, "apparentTemperatureMinTime": 1536548400, "apparentTemperatureMax": 80.48, "apparentTemperatureMaxTime": 1536588000 }, { "time": 1536616800, "summary": "Clear throughout the day.", "icon": "clear-day", "sunriseTime": 1536639217, "sunsetTime": 1536685134, "moonPhase": 0.06, "precipIntensity": 0, "precipIntensityMax": 0.0001, "precipIntensityMaxTime": 1536674400, "precipProbability": 0, "temperatureHigh": 80.99, "temperatureHighTime": 1536674400, "temperatureLow": 61.43, "temperatureLowTime": 1536721200, "apparentTemperatureHigh": 80.99, "apparentTemperatureHighTime": 1536674400, "apparentTemperatureLow": 61.43, "apparentTemperatureLowTime": 1536721200, "dewPoint": 52.31, "humidity": 0.54, "pressure": 1024.06, "windSpeed": 5.29, "windGust": 9.69, "windGustTime": 1536645600, "windBearing": 328, "cloudCover": 0, "uvIndex": 6, "uvIndexTime": 1536660000, "visibility": 10, "ozone": 297.19, "temperatureMin": 60.51, "temperatureMinTime": 1536634800, "temperatureMax": 80.99, "temperatureMaxTime": 1536674400, "apparentTemperatureMin": 60.51, "apparentTemperatureMinTime": 1536634800, "apparentTemperatureMax": 80.99, "apparentTemperatureMaxTime": 1536674400 }, { "time": 1536703200, "summary": "Partly cloudy starting in the afternoon, continuing until evening.", "icon": "partly-cloudy-day", "sunriseTime": 1536725687, "sunsetTime": 1536771420, "moonPhase": 0.1, "precipIntensity": 0.0001, "precipIntensityMax": 0.0002, "precipIntensityMaxTime": 1536746400, "precipProbability": 0.02, "precipType": "rain", "temperatureHigh": 83.79, "temperatureHighTime": 1536760800, "temperatureLow": 59.81, "temperatureLowTime": 1536807600, "apparentTemperatureHigh": 83.79, "apparentTemperatureHighTime": 1536760800, "apparentTemperatureLow": 59.81, "apparentTemperatureLowTime": 1536807600, "dewPoint": 52.17, "humidity": 0.51, "pressure": 1022.92, "windSpeed": 0.45, "windGust": 5.8, "windGustTime": 1536710400, "windBearing": 348, "cloudCover": 0.11, "uvIndex": 7, "uvIndexTime": 1536750000, "visibility": 10, "ozone": 279.83, "temperatureMin": 61.43, "temperatureMinTime": 1536721200, "temperatureMax": 83.79, "temperatureMaxTime": 1536760800, "apparentTemperatureMin": 61.43, "apparentTemperatureMinTime": 1536721200, "apparentTemperatureMax": 83.79, "apparentTemperatureMaxTime": 1536760800 }, { "time": 1536789600, "summary": "Mostly cloudy throughout the day.", "icon": "partly-cloudy-day", "sunriseTime": 1536812157, "sunsetTime": 1536857707, "moonPhase": 0.13, "precipIntensity": 0, "precipIntensityMax": 0, "precipProbability": 0, "temperatureHigh": 85.22, "temperatureHighTime": 1536847200, "temperatureLow": 62.58, "temperatureLowTime": 1536894000, "apparentTemperatureHigh": 85.22, "apparentTemperatureHighTime": 1536847200, "apparentTemperatureLow": 62.58, "apparentTemperatureLowTime": 1536894000, "dewPoint": 51.3, "humidity": 0.5, "pressure": 1019.25, "windSpeed": 2.21, "windGust": 7.74, "windGustTime": 1536829200, "windBearing": 95, "cloudCover": 0.4, "uvIndex": 5, "uvIndexTime": 1536832800, "visibility": 10, "ozone": 277.44, "temperatureMin": 59.81, "temperatureMinTime": 1536807600, "temperatureMax": 85.22, "temperatureMaxTime": 1536847200, "apparentTemperatureMin": 59.81, "apparentTemperatureMinTime": 1536807600, "apparentTemperatureMax": 85.22, "apparentTemperatureMaxTime": 1536847200 }]

const Forecast = () => (
  <div className="forecast">
    <div>Logo weather</div>
    <div className="flex">
      <div className="left">
        <WeatherBasicDetails
          temperature={30}
          description="Sunny"
          lastUpdate={1536226705302}
          onReloadClick={() => console.log('reload data')}
        />
        <WeatherAdvancedDetails
          humidity={87}
          dewPoint={25}
          uvIndex={0}
          visibility={3}
        />
      </div>
      <div className="right">
        <WeatherForecast
          city={cities[0]}
          forecasts={forecasts.slice(0, -1)}
        />
      </div>
    </div>
  </div>
)

export default Forecast
