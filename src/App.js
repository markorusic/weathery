import React, { Component } from 'react'
import withLoading from 'hoc/withLoading'
import weatherService from 'services/weather'
import Forecast from 'components/weather/Forecast'
import bg from 'assets/images/bg.jpg'
import ns from 'assets/images/ns.jpg'

const cities = [
  {
    name: 'Belgrade',
    slug: 'bg',
    image: bg
  },
  {
    name: 'Novi Sad',
    slug: 'ns',
    image: ns
  }
]

const ForecastWithLoading = withLoading(Forecast)

class App extends Component {

  state = {
    activeCity: cities[0],
    forecastData: null,
    lastUpdate: null,
    isLoading: false,
    lastCmpUpdate: Date.now()
  }

  componentWillMount() {
    this.loadData()
    this.rerenderInterval = setInterval(() => this.setState({ lastCmpUpdate: Date.now() }), 60000)
  }

  componentWillUnmount() {
    clearInterval(this.rerenderInterval)
  }

  loadData = (showLoader = true) => {
    if (showLoader) {
      this.toggleLoader()
    }
    return weatherService.fetchDataByCity(this.state.activeCity.slug)
      .then(data => {
        this.setState({
          forecastData: data,
          lastUpdate: Date.now()
        })
        if (showLoader) {
          this.toggleLoader()
        }
        return data
      })
  }

  toggleLoader = () => {
    this.setState(prevState => ({
      isLoading: !prevState.isLoading
    }))
  }

  onChangeCity = (city) => {
    this.setState({ activeCity: city })
    this.loadData()
  }

  onReload = () => {
    this.loadData(false)
  }

  render() {
    const { isLoading, lastUpdate, forecastData, activeCity } = this.state

    return (
      <div className="wrapper flex-center">
        <div className="forecast">
          {!isLoading && (<h3 className="full-width">Weathery</h3>)}
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
