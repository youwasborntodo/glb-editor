const rules = require('./webpack.rules');
const fs = require('fs');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
},
{
  test: /\.wasm$/,
  type: "javascript/auto",
  loader: "file-loader"
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    fallback: {
      fs: false,
      child_process: false,
      path: false,
      crypto: false,
    }
  },
};