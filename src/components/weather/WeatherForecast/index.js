import React from 'react'
import PropTypes from 'prop-types'
import WeatherForecastDayItem from 'components/weather/WeatherForecastDayItem'
import { formatDateBasic } from 'helpers/format'

class WeatherForecast extends React.Component {

  state = {
    showCitiesList: false
  }

  setCitiesList = (flag) => {
    this.setState(prevState => ({
      showCitiesList: flag
    }))
  }

  openCitiesList = () => this.setCitiesList(true)

  closeCitiesList = () => this.setCitiesList(false)

  render() {
    const { city, cities, forecasts, onChangeCity } = this.props
    const { showCitiesList } = this.state
    const listCities = cities.filter(c => c.slug !== city.slug)

    return (
      <div
        className="full-height border-box bg-img-cover"
        style={{
          backgroundImage: `url(${city.image})`
        }}
      >
        <div className="bg-overlay"></div>
        <div className="flex-sp-between-col absolute-cover">
          <div className="box" onMouseLeave={this.closeCitiesList}>
            <h1
              className="h1"
              onMouseEnter={this.openCitiesList}
            >
              {city.name}
              <i className="fa fa-chevron-down" />
            </h1>
            {
              showCitiesList && (
                <ul className="city-list">
                  {
                    listCities.map(c => (
                      <li key={c.slug}>
                        <a onClick={() => onChangeCity(c)}>
                          {c.name}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              )
            }
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
  }
}

WeatherForecast.propTypes = {
  city: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired,
  forecasts: PropTypes.array.isRequired,
  onChangeCity: PropTypes.func.isRequired
}

export default WeatherForecast