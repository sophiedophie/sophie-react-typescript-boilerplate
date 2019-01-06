const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const commonRules = [
  {
    test: /\.(js|jsx|ts|tsx)$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        babelrc: true
      }
    }
  },
]

const clientRules = [
  {
    test: /\.(sass|scss|css)$/,
    use: [
      {
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        }
      }
    ]
  }, {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
    use: {
      loader: 'url-loader'
    }
  }
];

const client = {
  mode: 'development',
  name: 'client',
  entry: {
    client: path.resolve(__dirname, '../src/client/index.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/public'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    // from webpack 4, loaders >> rules
    // https://webpack.js.org/concepts/loaders/#example
    rules: [...commonRules, ...clientRules]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/client/index.html'
    })
  ],
};

const server = {
  mode: 'development',
  name: 'server',
  target: 'node',
  entry: {
    'server': path.resolve(__dirname, '../src/server/index.ts')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [...commonRules]
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = [client, server];