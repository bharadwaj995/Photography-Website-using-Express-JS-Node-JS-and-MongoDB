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

app.listen(8084,function(){
    console.log('app started')
    console.log('listening on port 8084')
});


