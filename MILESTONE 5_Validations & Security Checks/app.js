var express = require('express');
var app = express();
var session = require('express-session');

app.set('view engine', 'ejs');
app.use(session({secret: "secretID"}));
app.use('/assets',express.static('assets'));

var controller = require('./routes/controller.js');

app.use('/',controller);

var usercontroller = require('./routes/usercontroller');

app.use('/',usercontroller);

app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'),function(){
    console.log('app started')
    console.log('Welcome to the NodeJS Appl')
});


