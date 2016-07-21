const _debug = require('debug');
const debug = _debug('WIR:forecast');

const { map } = require('ramda');
const moment = require('moment');
const data = require('../../temp/london-weather-forecast');
const hourlyForecast = data.hourly.data;

const cleanedForecast = map(({ time, summary, icon }) => {
  const formatedTime = moment.unix(time).format('HH:mm');
  return {
    time: formatedTime,
    summary,
    icon
  };
}, hourlyForecast);

const hourlyDate = moment.unix(hourlyForecast[0].time).format('Do MMM YYYY');
debug(`Forecast for ${hourlyDate}:`);
debug(cleanedForecast);
