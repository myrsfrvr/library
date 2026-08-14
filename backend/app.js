const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const qs = require('qs');
const path = require('path');

const bookRouter = require('./routes/bookRouter');
const authorRouter = require('./routes/authorRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(cors());

app.set('query parser', str => qs.parse(str));

// MIDDLEWARE STACK
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/books', bookRouter);
app.use('/api/v1/authors', authorRouter);
app.use('/api/v1/users', userRouter);

// START SERVER
module.exports = app;
