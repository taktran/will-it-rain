const _debug = require('debug');
const debug = _debug('WIR:forecast');

const { map } = require('ramda');
const moment = require('moment');
const data = require('../temp/london-weather-forecast');
const hourlyForecast = data.hourly.data;

const cleanedForecast = map(({ time, summary }) => ({
  time: moment.unix(time).toISOString(),
  summary
}), hourlyForecast);

debug(cleanedForecast);
