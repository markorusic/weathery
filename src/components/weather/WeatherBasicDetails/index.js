import React from 'react'
import PropTypes from 'prop-types'
import { formatDateFromNow, formatFarenheit } from 'helpers/format'
import Sun from 'assets/icons/web/sun'
import Chart from 'components/weather/Chart'

const WeatherBasicDetails = ({ temperature, summary, lastUpdate, onReloadClick }) => (
  <div className="box top relative flex-sp-between-col">
    <div className="flex-sp-between top">
      <div>
        <div className="h1 flex">
          <span>{formatFarenheit(temperature)}</span>
          <i className="fa fa-circle fs-10" aria-hidden="true"></i>
        </div>
        <div className="h2">
          <span>{summary}</span>
        </div>
      </div>
      <div>
        <Sun width={60} height={60} fill="#fff" />
      </div>
    </div>
    <div className="chart">
      <Chart />
    </div>
    <div className="absolute-b-20">
      <a className="rotate" onClick={(event) => {
        onReloadClick()
        event.target.classList.toggle('down')
      }}>
        <i
          className="fa fa-repeat rotate"
          aria-hidden="true"
        ></i>
      </a>
      <span className="ml-5">
        Updated <strong>{formatDateFromNow(lastUpdate)}</strong>
      </span>
    </div>
  </div>
)

WeatherBasicDetails.propTypes = {
  temperature: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  lastUpdate: PropTypes.number.isRequired,
  onReloadClick: PropTypes.func.isRequired
}

export default WeatherBasicDetails
