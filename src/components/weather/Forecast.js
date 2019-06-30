import React from 'react'
import PropTypes from 'prop-types'
import WeatherBasicDetails from './WeatherBasicDetails'
import WeatherAdvancedDetails from './WeatherAdvancedDetails'
import WeatherForecast from './WeatherForecast'

const Forecast = ({
  forecastData,
  cities,
  activeCity,
  lastUpdate,
  onChangeCity,
  onReload
}) => (
  <div className="flex">
    <div className="left">
      <WeatherBasicDetails
        temperature={forecastData.currently.temperature}
        summary={forecastData.currently.summary}
        icon={forecastData.currently.icon}
        lastUpdate={lastUpdate}
        onReloadClick={onReload}
      />
      <WeatherAdvancedDetails
        humidity={forecastData.currently.humidity}
        dewPoint={forecastData.currently.dewPoint}
        uvIndex={forecastData.currently.uvIndex}
        visibility={forecastData.currently.visibility}
      />
    </div>
    <div className="right">
      <WeatherForecast
        city={activeCity}
        cities={cities}
        onChangeCity={onChangeCity}
        forecasts={forecastData.daily.data.slice(0, -1)}
      />
    </div>
  </div>
)

Forecast.propTypes = {
  forecastData: PropTypes.object,
  cities: PropTypes.array,
  activeCity: PropTypes.object,
  lastUpdate: PropTypes.number,
  onChangeCity: PropTypes.func,
  onReload: PropTypes.func
}

export default Forecast
