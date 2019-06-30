import React from 'react'
import { WeatherIcon } from 'components/lib'
import { formatShortDay, formatFarenheit } from 'utils'

const WeatherForecastDayItem = ({ forecast }) => (
  <div className="forecast-day-item">
    <div className="day-icon-wrapper">
      <WeatherIcon icon={forecast.icon} width={30} height={30} fill="#c0c0c0" />
    </div>
    <div className="flex day-temperature">
      <span>{formatFarenheit(forecast.temperatureMax)}</span>
      <i className="fa fa-circle fs-5" aria-hidden="true" />
    </div>
    <div>
      <span className="uc fs-14">{formatShortDay(forecast.time * 1000)}</span>
    </div>
  </div>
)

export default WeatherForecastDayItem
