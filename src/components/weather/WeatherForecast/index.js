import React from 'react'
import WeatherForecastDayItem from 'components/weather/WeatherForecastDayItem'
import { formatDateBasic } from 'helpers/format'

const WeatherForecast = ({ city, forecasts }) => (
  <div
    className="full-height border-box bg-img-cover"
    style={{
      backgroundImage: `url(${city.image})`}
    }
  >
    <div className="bg-overlay"></div>
    <div className="flex-sp-between-col absolute-cover">
      <div className="box">
        <h1 className="h1">{city.name}</h1>
        <h2 className="current-date">{formatDateBasic(Date.now())}</h2>
      </div>
      <div className="flex-sp-between forecast-day-wrapper">
        {
          forecasts.map(forecast => (
            <WeatherForecastDayItem
              key={forecast.time}
              forecast={forecast}
            />
          ))
        }
      </div>
    </div>
  </div>
)

export default WeatherForecast
