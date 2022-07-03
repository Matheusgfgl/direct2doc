const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  pwa: {
    themeColor: '#02A6DC',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
    },
  },
  publicPath: process.env.BASE_URL,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/base/_variables.scss";
        @import "~@/assets/scss/base/_breakpoints.scss";
        `,
      },
    },
  },
};
