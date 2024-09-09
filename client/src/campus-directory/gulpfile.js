const path = require('path');
const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const campusDirectorySource = './app/main.jsx';
const campusDirectoryTarget = path.join(__dirname, '../../dist/public/_js');
gulp.task('campus-directory', () => {
  const config = {
    mode: 'development',
    entry: {
      ['campus-directory']: campusDirectorySource,
    },
    output: {
      filename: 'campus-directory.js',
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          },
        },
      ]
    }
  };

  return gulp.src(campusDirectorySource)
  .pipe(webpackStream(config))
  .pipe(gulp.dest(campusDirectoryTarget))
})