/* eslint-disable no-unused-vars */
const { NODE_ENV } = require('./config');

function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'Server error'} };
  } else {
    // eslint-disable-next-line no-console
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
}

module.exports = errorHandler;