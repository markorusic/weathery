import React from 'react'
import PropTypes from 'prop-types'
import Cloud from 'assets/icons/web/cloud'
import Cloudy from 'assets/icons/web/cloudy'
import Moon from 'assets/icons/web/moon'
import Rain from 'assets/icons/web/rain'
import Snowing from 'assets/icons/web/snowing'
import Storm from 'assets/icons/web/storm'
import Sun from 'assets/icons/web/sun'


const WeatherIndicatorIcon = ({ icon, ...props }) => {
  switch (icon) {
    case 'cloudy':
    case 'partly-cloudy-day':
    case 'partly-cloudy-night':
      return <Cloudy {...props} />
    case 'rain':
      return <Rain {...props} />
    case 'snow':
      return <Snowing {...props} />
    case 'storm':
      return <Storm {...props} />
    case 'sunny':
    case 'clear-day':
      return <Sun {...props} />
    case 'clear-night':
      return <Moon {...props} />
    default:
      return <Cloud {...props } />
  }
}

WeatherIndicatorIcon.propTypes = {
  icon: PropTypes.string.isRequired
}

export default WeatherIndicatorIcon
