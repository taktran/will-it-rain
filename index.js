const _debug = require('debug');
const debug = _debug('WIR:index');
const five = require('johnny-five');
const pixel = require('node-pixel');
const Raspi = require('raspi-io');

const opts = {
  io: new Raspi()
};

const HourlyForecast = require('./lib/forecast/hourly-forecast');
const forecastLights = require('./lib/lights/forecast-lights');

const board = new five.Board(opts);
const numPixels = 120;
board.on('ready', function () {
  debug('Board ready, let there be light!');

  const { hourlyForecast } = HourlyForecast();
  const strip = new pixel.Strip({
    board: this,
    controller: 'I2CBACKPACK',
    strips: [ numPixels ]
  });

  strip.on('ready', function () {
    strip.color('#000');
    const updateColor = (color, index) => {
      strip.pixel(index).color(color);
    };

    forecastLights({
      forecasts: hourlyForecast,
      applyFn: updateColor
    });

    strip.show();
  });
});
