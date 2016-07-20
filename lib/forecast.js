const _debug = require('debug');
const debug = _debug('WIR:forecast');
const errorLog = _debug('WIR:forecast:error');

const ForecastIO = require('forecast-io');
const moment = require('moment');
const forecastIOKey = process.env['WIR_FORECASTIO_KEY'];
if (!forecastIOKey) {
  throw new Error('No forecast.io key found');
}
const forecast = new ForecastIO(forecastIOKey);

const london = {
  latitude: '51.50853',
  longitude: '-0.12574'
};
const today = moment().format('YYYY-MM-DD');
const units = 'si'; // Celcius
const language = 'en';

forecast
  .latitude(london.latitude)
  .longitude(london.longitude)
  .time(today)
  .units(units)
  .language(language)
  .get()
  .then((res) => {
    debug(res);
  })
  .catch((err) => {
    errorLog(err);
  });
