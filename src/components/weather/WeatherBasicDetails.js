import React from 'react'
import PropTypes from 'prop-types'
import { formatDateFromNow, formatFarenheit } from 'utils'
import { WeatherIcon, Chart } from 'components/lib'

const WeatherBasicDetails = ({
  temperature,
  summary,
  icon,
  lastUpdate,
  onReloadClick
}) => (
  <div className="box top relative flex-sp-between-col">
    <div className="flex-sp-between">
      <div>
        <div className="h1 flex">
          <span>{formatFarenheit(temperature)}</span>
          <i className="fa fa-circle fs-10" aria-hidden="true" />
        </div>
        <div className="h2">
          <span>{summary}</span>
        </div>
      </div>
      <div>
        <WeatherIcon icon={icon} width={60} height={60} fill="#fff" />
      </div>
    </div>
    <div className="chart">
      <Chart />
    </div>
    <div className="absolute-b-20">
      <span
        className="rotate pointer"
        onClick={event => {
          event.preventDefault()
          onReloadClick()
          event.target.classList.toggle('down')
        }}
      >
        <i className="fa fa-repeat rotate" aria-hidden="true" />
      </span>
      <span className="ml-15">
        Updated <strong>{formatDateFromNow(lastUpdate)}</strong>
      </span>
    </div>
  </div>
)

WeatherBasicDetails.propTypes = {
  temperature: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  lastUpdate: PropTypes.number.isRequired,
  onReloadClick: PropTypes.func.isRequired
}

export default WeatherBasicDetails
