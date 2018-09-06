import React from 'react'
import { formatDateFromNow } from 'helpers/format'
import Sun from 'assets/icons/web/sun'
import Chart from 'components/weather/Chart'

const WeatherBasicDetails = ({ temperature, description, lastUpdate, onReloadClick }) => (
  <div className="box top relative flex-sp-between-col">
    <div className="flex-sp-between top">
      <div>
        <div className="h1 flex">
          <span>{temperature}</span>
          <i className="fa fa-circle fs-10" aria-hidden="true"></i>
        </div>
        <div className="h2">
          <span>{description}</span>
        </div>
      </div>
      <div>
        <Sun width={60} height={60} fill="#fff" />
      </div>
    </div>
    <div className="chart"><Chart /></div>
    <div className="absolute-b-20">
      <a onClick={onReloadClick}>
        <i className="fa fa-repeat" aria-hidden="true"></i>
      </a>
      <span className="ml-5">
        Updated <strong>{formatDateFromNow(lastUpdate)}</strong>
      </span>
    </div>
  </div>
)

export default WeatherBasicDetails
