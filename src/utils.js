import moment from 'moment'

export const formatDateBasic = value => moment(value).format('DD MMMM')

export const formatDateFromNow = value =>
  moment(value)
    .startOf('minute')
    .fromNow()

export const formatFarenheit = farenheitTemp =>
  Math.floor((5 / 9) * (farenheitTemp - 32))

export const formatShortDay = value => moment(value).format('ddd')
