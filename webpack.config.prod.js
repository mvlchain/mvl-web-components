const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',
  // externals: {
  //   react: 'react',
  //   'react-dom': 'react-dom'
  // },
  externals: [nodeExternals()],
  // entry: './components/index.ts',
  // externalsPresets: {
  //   node: true // in order to ignore built-in modules like path, fs, etc.
  // },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    library: 'lib',
    libraryTarget: 'umd',
    globalObject: 'this',
    chunkFilename: '[id].js',
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript'
              ]
            }
          },
          {
            loader: 'ts-loader',
          }
        ],
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    extensions: ['.js', '.ts', '.tsx', '...'],
    alias: {
      react: path.resolve('./node_modules/react'),
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.ts$/,
        include: path.join(__dirname, './index.js')
      }),
    ],
  }
};
