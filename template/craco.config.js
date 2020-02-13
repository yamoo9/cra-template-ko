const sassSourcemapsPlugin = require('./cracoConfig/plugins/craco-sass-sourcemap');

module.exports = {
  plugins: [
    { plugin: sassSourcemapsPlugin },
  ],
};
