const { map } = require('ramda');
const moment = require('moment');

module.exports = () => {
  const data = require('../../temp/london-weather-forecast');
  const hourlyForecast = data.hourly.data;

  const cleanedForecast = map(({ time, summary, icon }) => {
    const formatedTime = moment.unix(time).format('HH:mm');
    return {
      time: formatedTime,
      id: icon,
      description: summary
    };
  }, hourlyForecast);

  const hourlyDate = moment.unix(hourlyForecast[0].time).format('Do MMM YYYY');

  return {
    date: hourlyDate,
    hourlyForecast: cleanedForecast
  };
};
