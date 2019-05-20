const express = require('express')
const router = express.Router()
var cors = require('cors')
var createError = require('http-errors')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var dev = process.env.NODE_ENV === 'development'
const PORT = 3000
const HOST = '0.0.0.0'
const app = express()
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')


// Middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5000'
}))
app.use(function(err, req, res, next) {  // error handler
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
})


// Routes
app.use('/', require('./routes/index'))
app.use('/beta-email-signup', require('./routes/beta-email-signup'))


/* Connect to MongoDB Server */
const uri = 'mongodb+srv://Kaelin:D5%257ywQ2WlanA%23z%23j@beta-emails-n3nqb.mongodb.net/test?retryWrites=true'
MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
  err ? console.log(err) : console.log("Connected successfully to MongoDB on Atlas")

  client.close()
});

// const url = 'mongodb://localhost:27017'
// const url = 'mongodb+srv://Kaelin:<D5%7ywQ2WlanA#z#j>@beta-emails-n3nqb.mongodb.net/test?retryWrites=true'
// const dbName = 'lunchroom'
//
// MongoClient.connect(url, function(err, client) {
  // assert.equal(null, err)
  // console.log("Connected successfully to server")
  //
  // const db = client.db(dbName);
  //
  // client.close();
// })


app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

module.exports = router;
