const pixelLights = require('./pixel-lights');

module.exports = ({ forecasts, applyFn }) => {
  const pixels = pixelLights(forecasts);

  pixels.forEach(applyFn);
};
