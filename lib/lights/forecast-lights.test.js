const test = require('tape');
const forecastLights = require('./forecast-lights');

test('forecast lights for a clear day', (t) => {
  t.plan(5);
  const forecasts = [
    { id: 'clear-day' }
  ];
  const applyFn = (color, index) => {
    switch (index) {
      case 0: t.equal(color, 'yellow'); break;
      case 1: t.equal(color, 'blue'); break;
      case 2: t.equal(color, 'blue'); break;
      case 3: t.equal(color, 'blue'); break;
      case 4: t.equal(color, 'blue'); break;
    }
  };

  forecastLights({
    forecasts,
    applyFn
  });
});

test('forecast lights for multiple forecasts', (t) => {
  t.plan(10);
  const forecasts = [
    { id: 'clear-day' },
    { id: 'rain' }
  ];
  const applyFn = (color, index) => {
    switch (index) {
      case 0: t.equal(color, 'yellow'); break;
      case 1: t.equal(color, 'blue'); break;
      case 2: t.equal(color, 'blue'); break;
      case 3: t.equal(color, 'blue'); break;
      case 4: t.equal(color, 'blue'); break;

      case 5: t.equal(color, '#000'); break;
      case 6: t.equal(color, '#555'); break;
      case 7: t.equal(color, '#000'); break;
      case 8: t.equal(color, '#555'); break;
      case 9: t.equal(color, '#000'); break;
    }
  };

  forecastLights({
    forecasts,
    applyFn
  });
});
