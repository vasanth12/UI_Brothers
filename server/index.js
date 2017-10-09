import express from 'express';
//var express = require('express');
//var path = require('path');
import path from 'path';
import webpack from 'webpack';
import PropTypes from 'prop-types';
//var webpack = require('webpack');
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
//var webpackMiddleware = require('webpack-dev-middleware');
import webpackConfig from '../webpack.config.dev';
//var webpackconfig = require('../webpack.config.dev');

let app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot:true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'));
});
app.listen(3000, () => console.log('Running on localhost:3000'));
