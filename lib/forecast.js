const ForecastIO = require('forecast-io');
const moment = require('moment');

module.exports = (location) => {
  const today = moment().format('YYYY-MM-DD');

  return new Promise((resolve, reject) => {
    const forecastIOKey = process.env['WIR_FORECASTIO_KEY'];
    if (!forecastIOKey) {
      throw new Error('No forecast.io key found');
    }
    const forecast = new ForecastIO(forecastIOKey);

    const units = 'si'; // Celcius
    const language = 'en';

    forecast
      .latitude(location.latitude)
      .longitude(location.longitude)
      .time(today)
      .units(units)
      .language(language)
      .get()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
