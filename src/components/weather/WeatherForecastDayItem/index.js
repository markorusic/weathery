import React from 'react'
import { formatShortDay, formatFarenheit } from 'helpers/format'
import Rain from 'assets/icons/web/rain'

const WeatherForecastDayItem = ({ forecast }) => (
  <div className="forecast-day-item">
    <div className="day-icon-wrapper">
      <Rain width={30} height={30} fill="#a3a8a9" />
    </div>
    <div className="flex day-temperature">
      <span>{formatFarenheit(forecast.temperatureMax)}</span>
      <i className="fa fa-circle fs-5" aria-hidden="true"></i>
    </div>
    <div>
      <span className="uc fs-14">
        {formatShortDay(forecast.time * 1000)}
      </span>
    </div>
  </div>
)

export default WeatherForecastDayItem
