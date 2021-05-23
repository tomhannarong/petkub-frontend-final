require("dotenv").config();
const withFonts = require("next-fonts");

module.exports = {
  env: {
    // GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
};

module.exports = withFonts();
