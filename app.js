const express = require('express');
const morgan = require('morgan');
const qs = require('qs');
const path = require('path');

const bookRouter = require('./routes/bookRouter');
const authorRouter = require('./routes/authorRouter');

const app = express();

app.set('query parser', str => qs.parse(str));

// 1) MIDDLEWARE STACK
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

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/add-book', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html/newbook.html'));
});

app.get('/book/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html/details.html'));
});

app.get('/edit-book/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html/editBook.html'));
});

app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html/search.html'));
});

// 4) START SERVER
module.exports = app;
