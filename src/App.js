import React, { Component } from 'react'
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
    name: 'Novi sad',
    slug: 'ns',
    image: ns
  }
]

class App extends Component {

  state = {
    activeCity: cities[0],
    forecastData: null,
    lastUpdate: null,
    isLoading: false,
    lastCmpUpdate: Date.now()
  }

  componentWillMount() {
    this.toggleLoader()
    this.loadData()
      .then(this.toggleLoader)
    this.rerenderInterval = setInterval(() => this.setState({ lastCmpUpdate: Date.now() }), 3000)
  }

  componentWillUnmount() {
    clearInterval(this.rerenderInterval)
  }

  loadData = () => {
    return weatherService.fetchDataByCity(this.state.activeCity.slug)
      .then(data => {
        this.setState({
          forecastData: data,
          lastUpdate: Date.now()
        })
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
    this.loadData()
  }

  render() {
    const { isLoading, lastUpdate, forecastData, activeCity } = this.state

    if (isLoading) {
      return (<h3>Loading...</h3>)
    }

    return (
      <div className="wrapper flex-center">
        <div className="forecast">
          <div>Logo weather</div>
          <Forecast
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
