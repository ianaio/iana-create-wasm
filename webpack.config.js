const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
	 "./fallback.js",
	 "./polyfill.js",
    
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
	      "fallback.js",
	      "polyfill.js",
  },
  module: {
    rules: [{
      test: /\/m?js$/,
      use: {
        loader: 'babel/loader',
        options: {
          presets: [[
            '@babel/preset-env',
            {
              targets:{chrome: '50',ie: '11'},
	    },
	  ]],
	},
      },
    }],
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html'])
  ],
};

