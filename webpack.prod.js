const {merge} = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://restaurant-api.dicoding.dev/'), // Sementara pake endpoint ini dulu
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'RESTAURANT_API', // Nama cache diubah jadi CAR_API
            cacheableResponse: {
              statuses: [200],
            },
          },
        },
      ],
    }),
  ],
});
