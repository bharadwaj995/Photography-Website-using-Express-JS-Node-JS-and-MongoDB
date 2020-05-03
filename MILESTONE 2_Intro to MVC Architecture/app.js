var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets',express.static('assets'));

var controller = require('./routes/controller.js');

app.use('/',controller);


app.listen(8084,function(){
    console.log('app started')
    console.log('listening on port 8084')
});


