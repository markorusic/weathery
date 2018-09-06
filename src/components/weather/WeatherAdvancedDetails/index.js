import React from 'react'

const WeatherBasicDetails = ({ humidity, dewPoint, uvIndex, visibility }) => (
  <div className="box bottom flex-sp-between-col">
    <div className="flex-sp-between">
      <div>
        <div>
          <strong>{humidity}%</strong>
        </div>
        <div>
          <span>Humidity</span>
        </div>
      </div>
      <div>
        <div>
          <strong className="flex">
            <span>{dewPoint}</span>
            <i className="fa fa-circle fs-5" aria-hidden="true"></i>
          </strong>
        </div>
        <div>Dew Pt.</div>
      </div>
    </div>
    <div className="flex-sp-between">
      <div>
        <div>
          <strong>{uvIndex}/10</strong>
        </div>
        <div>UV Index</div>
      </div>
      <div>
        <div>
          <strong>{visibility}km</strong>
        </div>
        <div>Visibility</div>
      </div>
    </div>
  </div>
)

export default WeatherBasicDetails
