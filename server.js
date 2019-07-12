var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
const flash = require('express-flash');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

  app.use(flash());
  
  app.set('views', path.join(__dirname, './views'));
  app.set('view engine', 'ejs');

// Routes
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// Setting our Server to Listen on Port: 8005
app.listen(8005, function() {
    console.log("listening on port 8005");
})
