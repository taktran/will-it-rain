const test = require('tape');
const pixelLights = require('./pixel-lights');

test('lights for unknown forecast', (t) => {
  const forecast = [
    { id: 'some-weird-thing' }
  ];

  t.deepEqual(pixelLights(forecast), [
    '#000',
    '#000',
    '#000',
    '#000',
    '#000'
  ]);
  t.end();
});

test('lights for clear-day', (t) => {
  const forecast = [
    { id: 'clear-day' }
  ];

  t.deepEqual(pixelLights(forecast), [
    'yellow',
    'blue',
    'blue',
    'blue',
    'blue'
  ]);
  t.end();
});

test('lights for clear-night', (t) => {
  const forecast = [
    { id: 'clear-night' }
  ];

  t.deepEqual(pixelLights(forecast), [
    'yellow',
    'blue',
    'blue',
    'blue',
    'blue'
  ]);
  t.end();
});

test('lights for rain', (t) => {
  const forecast = [
    { id: 'rain' }
  ];

  t.deepEqual(pixelLights(forecast), [
    '#000',
    '#555',
    '#000',
    '#555',
    '#000'
  ]);
  t.end();
});

test('lights for snow', (t) => {
  const forecast = [
    { id: 'snow' }
  ];

  t.deepEqual(pixelLights(forecast), [
    '#aaa',
    '#aaa',
    '#aaa',
    '#aaa',
    '#aaa'
  ]);
  t.end();
});

test('multiple forecasts', (t) => {
  const forecasts = [
    { id: 'clear-day' },
    { id: 'snow' },
    { id: 'rain' }
  ];

  t.deepEqual(pixelLights(forecasts), [
    'yellow',
    'blue',
    'blue',
    'blue',
    'blue',

    '#aaa',
    '#aaa',
    '#aaa',
    '#aaa',
    '#aaa',

    '#000',
    '#555',
    '#000',
    '#555',
    '#000'
  ]);

  t.end();
});
