import React, { Component } from 'react'
import withLoading from 'hoc/withLoading'
import weatherService from 'services/weatherService'
import Forecast from 'components/weather/Forecast'

const ForecastWithLoading = withLoading(Forecast)

class App extends Component {
  state = {
    cities: [],
    activeCity: null,
    forecastData: null,
    lastUpdate: null,
    isLoading: false,
    lastCmpUpdate: Date.now()
  }

  componentWillMount() {
    this.loadData()
    this.rerenderInterval = setInterval(
      () => this.setState({ lastCmpUpdate: Date.now() }),
      60000
    )
  }

  componentWillUnmount() {
    clearInterval(this.rerenderInterval)
  }

  loadData = async (showLoader = true) => {
    if (showLoader) {
      this.toggleLoader()
    }

    const cities = await weatherService.fetchCities()
    const activeCity = this.state.activeCity ? this.state.activeCity : cities[0]
    const forecastData = await weatherService.fetchDataByCity(activeCity.slug)

    this.setState(state => ({
      cities,
      activeCity,
      forecastData,
      lastUpdate: Date.now()
    }))

    if (showLoader) {
      this.toggleLoader()
    }

    return forecastData
  }

  toggleLoader = () => {
    this.setState(prevState => ({
      isLoading: !prevState.isLoading
    }))
  }

  onChangeCity = city => {
    this.setState({ activeCity: city })
    this.loadData()
  }

  onReload = () => {
    this.loadData(false)
  }

  render() {
    const {
      isLoading,
      lastUpdate,
      forecastData,
      cities,
      activeCity
    } = this.state

    return (
      <div className="wrapper flex-center">
        <div className="forecast">
          {!isLoading && <h3 className="full-width">Weathery</h3>}
          <ForecastWithLoading
            isLoading={isLoading}
            forecastData={forecastData}
            cities={cities}
            activeCity={activeCity}
            lastUpdate={lastUpdate}
            onChangeCity={this.onChangeCity}
            onReload={this.onReload}
          />
        </div>
      </div>
    )
  }
}

export default App
