var express = require('express');
var router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var connection = require("../model/connection")
var connectionDB = require('../model/connectionDB');
var user = require("../model/user");
var userprofile = require("../model/userProfile");
var UserConnection = require("../model/userconnection");

function userSessionHandling(req,res,next){
    //Checking session data
    if (req.session.userdetails==undefined){
        //Creating a session for user  
        var newUser = new user("BA","Bharadwaj","Arya","bharadwajarya0995@gmail.com","Postfach 4103","Bottmingen","Arlesheim","Basel","4103","Switzerland");
        
        req.session.userdetails = newUser;

        //Creating an object of active user connections from UserConnections list
        var userprofilesession = new userprofile(newUser.getuserID, new Array()).getUserConnections();
        //console.log('profileSession:',userprofilesession);
        //Creating a session for User profile from User active connections (any updates from Saved Connections)
        req.session.userprofilesession = userprofilesession;
        
    } 
    next(); 
}

router.all('/Savedconnections*', urlencodedParser, userSessionHandling, function(req, res){
    var activeuserdetails  = req.session.userdetails;
    var activeuserconnections = req.session.userprofilesession;
    var userarraylist = [];
    activeuserconnections.forEach(function(each_user_connection){
        var conn = each_user_connection.connection;
        var conn_obj = new connection(conn.connectionId, conn.connection_name, conn.connection_category, conn.details, conn.dateAndTime, conn.hostedBy,conn.venue,conn.image);
        var user_savedconn = new UserConnection(conn_obj,each_user_connection.rsvp);
        userarraylist.push(user_savedconn);
    });

    var userprofileobj = new userprofile(activeuserdetails.userID, userarraylist);
    var action = req.query.action;
    if(!action){
        res.render("SavedConnections",{session:activeuserdetails, userconnections: userprofileobj.getUserConnections()})
    }
    else{
        var conID = req.query.conID;
        var connResp = req.body.response;
        if(action=="save"){
            userprofileobj.addConnection(connectionDB.getconnection(conID),connResp);
        }
        else if(action=="delete"){
            userprofileobj.removeConnection(connectionDB.getconnection(conID));
        }
        
        req.session.userprofilesession = userprofileobj.getUserConnections();
        res.render("SavedConnections",{session:activeuserdetails, userconnections: userprofileobj.getUserConnections()})
         
    }


});
      
module.exports = router;