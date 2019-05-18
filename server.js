const express = require('express');
const router = express.Router();
var cors = require('cors');
var createError = require('http-errors')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var dev = process.env.NODE_ENV === 'development'
const PORT = 5000;
const HOST = '0.0.0.0';
const app = express();

// Middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Routes
app.use('/', require('./routes/index'))
app.use('/beta-email-signup', require('./routes/beta-email-signup'))

// app.get('/api', (req, res) => {
//   res.json({ a: 1 });
// });
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

module.exports = router;
