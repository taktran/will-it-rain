const { map, compose, flatten } = require('ramda');
const lightsMapping = require('./mapping');
console.log('pixel');
module.exports = (forecasts) => {
  const mapForecastToLights = compose(flatten, map);
  const pixelLights = mapForecastToLights(({ id }) => {
    return lightsMapping[id]
      ? lightsMapping[id]
      : lightsMapping.default;
  }, forecasts);

  return pixelLights;
};
