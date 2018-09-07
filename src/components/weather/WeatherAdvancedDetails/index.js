import React from 'react'
import PropTypes from 'prop-types'
import { formatFarenheit } from 'helpers/format'

const WeatherBasicDetails = ({ humidity, dewPoint, uvIndex, visibility }) => (
  <div className="box bottom flex-sp-between">
    <div className="flex-sp-between-col">
      <div>
        <div>
          <strong>{humidity}%</strong>
        </div>
        <div>
          <span className="desc">Humidity</span>
        </div>
      </div>
      <div>
        <div>
          <strong>{uvIndex}/10</strong>
        </div>
        <div>
          <span className="desc">UV Index</span>
        </div>
      </div>
    </div>
    <div className="flex-sp-between-col">
      <div>
        <div>
          <strong className="flex">
            <span>{formatFarenheit(dewPoint)}</span>
            <i className="fa fa-circle fs-5" aria-hidden="true"></i>
          </strong>
        </div>
        <div>
          <span className="desc">Dew Pt.</span>
        </div>
      </div>
      <div>
        <div>
          <strong>{visibility} km</strong>
        </div>
        <div>
          <span className="desc">Visibility</span>
        </div>
      </div>
    </div>
  </div>
)

WeatherBasicDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  dewPoint: PropTypes.number.isRequired,
  uvIndex: PropTypes.number.isRequired,
  visibility: PropTypes.number.isRequired
}

export default WeatherBasicDetails
