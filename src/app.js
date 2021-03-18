/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const PlanetsRouter = require('./Planets/planet-router');
const errorHandler = require('./error-handler');
//const bodyParser = require('body-parser');

const app = express();
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use(errorHandler);

app.use('/api/planets', PlanetsRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = app;