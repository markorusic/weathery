import React, { Component } from 'react'
import Forecast from 'components/weather/Forecast'

class App extends Component {
  render() {
    return (
      <div className="wrapper flex-center">
        <Forecast />
      </div>
    )
  }
}

export default App
