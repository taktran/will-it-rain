const _debug = require('debug');
const debug = _debug('WIR:forecast');
const errorLog = _debug('WIR:forecast:error');

const fs = require('fs');
const path = require('path');
const forecast = require('./forecast');
const jsonfile = require('jsonfile');
const tempFolder = './temp';
const fileName = 'london-weather-forecast.json';
const london = {
  latitude: '51.50853',
  longitude: '-0.12574'
};

forecast(london)
  .then(resp => {
    const jsonStr = JSON.parse(resp);
    fs.mkdir(tempFolder, () => {
      // Ignore error
      const file = path.join(tempFolder, fileName);
      const jsonOptions = { spaces: 2 };
      jsonfile.writeFile(file, jsonStr, jsonOptions, (error) => {
        if (error) { return errorLog(error); }
        debug('Wrote file:', file);
      });
    });
  })
  .catch(error => {
    errorLog(error);
  });
