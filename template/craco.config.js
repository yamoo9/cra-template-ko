const cracoAliasPlugin = require('craco-alias')
// const cracoFaviconsPlugin = require('craco-favicons')
const sassSourcemapsPlugin = require('./plugins/sass-sourcemap')
// const imageOptimizerPlugin = require('craco-image-optimizer-plugin')

module.exports = {
  plugins: [
    { plugin: sassSourcemapsPlugin },
    {
      plugin: cracoAliasPlugin,
      options: {
        source: 'jsconfig',
        baseUrl: './src',
        aliases: {
          // '@components/*': ['components/*', 'components'],
        },
        // debug: false,
      },
    },
    {
      plugin: cracoFaviconsPlugin,
      // 제공된 모든 옵션은 favicons-webpack-plugin에 전달됩니다.
      // 참고: https://bit.ly/30dWLdX
      // options: {
      //   logo: './src/assets/images/app-logo.svg',
      //   inject: true,
      //   prefix: 'static/icons/',
      //   favicons: {
      //     icons: {
      //       android: { offset: 10 },
      //       appleIcon: { offset: 10 },
      //       coast: false,
      //       yandex: false,
      //       appleStartup: { offset: 10 },
      //       firefox: false,
      //       windows: false,
      //     },
      //   },
      // },
    },
    {
      plugin: imageOptimizerPlugin,
      // 제공된 모든 옵션은 image-webpack-plugin에 전달됩니다.
      // 참고: https://github.com/tcoopman/image-webpack-loader#usage
      options: {
        mozjpeg: {
          progressive: true,
          quality: 65,
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 75,
        },
      },
    },
  ],
}
