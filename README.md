# will-it-rain

Will it rain? A weather indicator using a neo-pixel light strip.

## Development

* Install [nvm](https://github.com/creationix/nvm)
* Use correct node version

        nvm use

* Install dependencies

        npm install

## Weather forecast

The forecasts come from [forecast.io](https://forecast.io/).

To set up:

* Get a [forecast.io](https://developer.forecast.io/) api key
* Set api key as `WIR_FORECASTIO_KEY` environment variable

To run:

    npm run forecast
