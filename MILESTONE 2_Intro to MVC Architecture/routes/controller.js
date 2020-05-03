var express = require('express');
var router = express.Router();


var connectionDB = require('../model/connectionDB');


router.get('/index', function (req, res) {
  res.render("index");
});

router.get('/', function (req, res) {
  res.render("index");
});

router.get('/contact', function (req, res) {
  res.render("contact");
});

router.get('/about', function (req, res) {
  res.render("about");
});

router.get('/info', function (req, res) {
  res.render("info");
});

router.get('/newConnection', function (req, res) {
  res.render("newConnection");
});

router.get('/Login', function (req, res) {
  res.render("index");
});

router.get('/Signup', function (req, res) {
  res.render("index");
});

router.get('/connection', function (req, res) {
  if(Object.keys(req.query).length!=0){
    var conObj = connectionDB.getconnection(req.query.conID);
    console.log(conObj);
    if(conObj.connectionId==undefined){
      res.render("connections", {connections:connectionDB.getconnections(), categories:connectionDB.categories()});
    }
    else{
      res.render("connection", {connection:connectionDB.getconnection(req.query.conID)});
        }
    
  }
  else{
    res.render("connections", {connections:connectionDB.getconnections(), categories:connectionDB.categories()});
  }
  });

router.get('/connections', function (req, res) {
  var connectionsList = connectionDB.getconnections();
    res.render("connections", {connections:connectionsList, categories:connectionDB.categories()});
  });

router.get('/SavedConnections', function (req, res) {
    var savedconnectionslist = connectionDB.getsavedconections();
    res.render("SavedConnections",{SavedConnections:savedconnectionslist});
  });

  module.exports = router;  