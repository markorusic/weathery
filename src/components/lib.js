import React from 'react'
import Cloud from 'assets/icons/web/cloud'
import Cloudy from 'assets/icons/web/cloudy'
import Moon from 'assets/icons/web/moon'
import Rain from 'assets/icons/web/rain'
import Snowing from 'assets/icons/web/snowing'
import Storm from 'assets/icons/web/storm'
import Sun from 'assets/icons/web/sun'

export const WeatherIcon = ({ icon, ...props }) => {
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
      return <Cloud {...props} />
  }
}

export const Chart = props => (
  <svg width={310} height={500} {...props}>
    <path
      d="M0 329.227c62.942-30.873 113.921-34.434 152.938-10.683 58.524 35.626 90.4 54.667 136.495 61.792 46.094 7.126 129.056-22.81 156.126-19.888 18.047 1.948 36.194 6.46 54.441 13.537V500H0V329.227z"
      className="shape path"
      fill="#325b5b42"
    />
    <path
      d="M0 386.78c41.094-12.664 68.782-16.407 83.064-11.231 21.423 7.764 32.074 15.816 67.59 11.23 35.517-4.585 88.176-74.02 152.284-74.02 64.109 0 66.209 34.567 117.873 34.567 34.443 0 60.84-9.6 79.189-28.798V500H0V386.78z"
      className="shape path bg"
      fill="#a6baba4f"
    />
    <path
      d="M0 386.78c41.094-12.664 68.782-16.407 83.064-11.231 21.423 7.764 32.074 15.816 67.59 11.23 35.517-4.585 88.176-74.02 152.284-74.02 64.109 0 66.209 34.567 117.873 34.567 34.443 0 60.84-9.6 79.189-28.798"
      className="line path"
      fill="#a6baba00"
      stroke="#4df9f7"
      strokeWidth={5}
    />
  </svg>
)
