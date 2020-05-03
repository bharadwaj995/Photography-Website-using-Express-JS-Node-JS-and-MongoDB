var express = require('express');
var router = express.Router();
//var session = require('express-session');
var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

var connection = require('../model/connection');
var connectionDB = require('../model/connectionDB');


router.get('/index', function (req, res) {
  res.render("index", {session:req.session.userdetails});
});

router.get('/', function (req, res) {
  res.render("index", {session:req.session.userdetails});
});

router.get('/contact', function (req, res) {
  res.render("contact",{session:req.session.userdetails});
});

router.get('/about', function (req, res) {
  res.render("about",{session:req.session.userdetails});
});

router.get('/info', function (req, res) {
  res.render("info",{session:req.session.userdetails});
});

router.get('/newConnection', function (req, res) {
  res.render("newConnection",{session:req.session.userdetails});
});

router.get('/login', function (req, res) {
  res.render("login",{session:req.session.userdetails});
});

router.get('/Signup', function (req, res) {
  res.render("index",{session:req.session.userdetails});
});

router.all('/connection', function (req, res) {
  if(Object.keys(req.query).length!=0){
    var conObj = connectionDB.getconnection(req.query.conID);
    if(conObj.connectionId==undefined){
      res.render("connections", {connections:connectionDB.getconnections(),session:req.session.userdetails, categories:connectionDB.categories()});
    }
    else{
      res.render("connection", {connection:connectionDB.getconnection(req.query.conID),session:req.session.userdetails});
        }
    
  }
  else{
    res.render("connections", {connections:connectionDB.getconnections(), session:req.session.userdetails, categories:connectionDB.categories()});
  }
  });

router.get('/connections', function (req, res) {
  var connectionsList = connectionDB.getconnections();
    res.render("connections", {connections:connectionsList, session:req.session.userdetails, categories:connectionDB.categories()});
  });

router.get('/logout', function (req, res){
  req.session.destroy();
  res.render("index", {session:undefined});
});

  module.exports = router;  