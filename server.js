// require modules
const express = require('express');
const path = require('path');
const thisWeekDb = require('./data/thisweek-db');
  
// create express app
const app = express();
  
// configure express app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
  
// middleware
  
  
// routes
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});
app.get('/home', function(req, res) {
    res.render('home');
});
app.get('/thisweek', function(req, res) {
    res.render('thisweek/index', {
        thisWeek: thisWeekDb.getAll()
    });
});
  
// open port
app.listen(3000, function() {
  console.log('Listening on port 3000');
});