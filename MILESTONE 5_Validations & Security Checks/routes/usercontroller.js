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
var dbconnect = require("../model/db_mongo/dbconnect");
var connectiondb_mongo = require("../model/db_mongo/connectiondb_mongo");
var userProfiledb_mongo = require("../model/db_mongo/userProfiledb_mongo");
var userdb_mongo = require("../model/db_mongo/userdb");
// express-validations
const {check, validationResult} = require('express-validator');
//Salting and hashing the user Password
const bcrypt = require('bcrypt'); //Importing the NPM bcrypt package.


async function userSessionHandling(req,res,next){
    //Checking session data
    if (req.session.userdetails==undefined){
        //Creating a session for user  
        var userdb_mongo_Obj = new userdb_mongo();
        // await userdb_mongo_Obj.addUser();
        var getUser_obj = await userdb_mongo_Obj.getUser("Steve McCurry and Bharadwaj Arya");
        console.log("Hardcoded User form db",getUser_obj);
        // var newUser = new user(getUser_obj.userID,getUser_obj.firstname,getUser_obj.lastname,getUser_obj.email_address,getUser_obj.addressfield1,getUser_obj.addressfield2,getUser_obj.city,getUser_obj.state,getUser_obj.zipcode,getUser_obj.country);
        // var newUser = new user("BharadwajArya","Bharadwaj","Arya","bharadwajarya0995@gmail.com","Postfach 4103","Bottmingen","Arlesheim","Basel","4103","Switzerland");
        req.session.userdetails = getUser_obj;
        //Creating an object of active user connections from UserConnections list
        var userprofilesession = new userprofile(getUser_obj.getuserID, new Array()).getUserConnections();
        //console.log('profileSession:',userprofilesession);
        //Creating a session for User profile from User active connections (any updates from Saved Connections)
        req.session.userprofilesession = userprofilesession;
        
    } 
    next(); 
}

router.all('/Savedconnections*', urlencodedParser, async function(req, res){
    var activeuserdetails  = req.session.userdetails;
    //Fetching the active user details from the DB based on the userId
    var userProfiledb_mongo_Obj = new userProfiledb_mongo();
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

        var getUserProfile = await userProfiledb_mongo_Obj.getUserProfile(activeuserdetails.userID);
        var userConnList = [];
        if(getUserProfile.length>0){
            //getUserProfile[0].userConnections.forEach(async function(saved_user_conn){
                for(let i=0;i<getUserProfile[0].userConnections.length;i++){
                    // saved_user_conn.connectionId;
                    var connectiondb_mongo_Obj = new connectiondb_mongo();
                    var conObj = await connectiondb_mongo_Obj.getConnection(getUserProfile[0].userConnections[i].connectionId);
                    // console.log('ConObj',conObj);
                    var connectId = new UserConnection(conObj,getUserProfile[0].userConnections[i].rsvp);
                    // console.log('Connection ID',connectId);
                    userConnList.push(connectId);
                }
        }
        // console.log('userConn:',userConnList);
        res.render("SavedConnections",{session:activeuserdetails, userconnections: userConnList})
    }
    else{
        var conID = req.query.conID;
        var connResp = req.body.response;
        if(action=="save" && connResp){
            var getUserProfile = await userProfiledb_mongo_Obj.getUserProfile(activeuserdetails.userID);
            if(getUserProfile.length==0)
            {
            //create a connection and an RSVP in the UserProfile for the new user
               await userProfiledb_mongo_Obj.addNewUserProfileConnection(activeuserdetails.userID,conID,connResp)
            }else{
            //Adding a new connection to the existing UserProfilw
                let abc = await userProfiledb_mongo_Obj.addUserConnection(activeuserdetails.userID,conID,connResp)
                console.log(abc);
            }
        //userprofileobj.addConnection(connectionDB.getconnection(conID),connResp);
        }
        else if(action=="delete"){
            let abc = await userProfiledb_mongo_Obj.deleteUserConnection(activeuserdetails.userID,conID);
            //userprofileobj.removeConnection(connectionDB.getconnection(conID));
        }
        else if(action=='update'&&connResp){
            let abc = await userProfiledb_mongo_Obj.updateUserRSVP(activeuserdetails.userID,conID,connResp);

        }
        var getUserProfile = await userProfiledb_mongo_Obj.getUserProfile(activeuserdetails.userID);
        var userConnList = [];
        //getUserProfile[0].userConnections.forEach(async function(saved_user_conn){
            for(let i=0;i<getUserProfile[0].userConnections.length;i++){
            // saved_user_conn.connectionId;
            var connectiondb_mongo_Obj = new connectiondb_mongo();
            var conObj = await connectiondb_mongo_Obj.getConnection(getUserProfile[0].userConnections[i].connectionId);
            //console.log('ConObj',conObj);
            var connectId = new UserConnection(conObj,getUserProfile[0].userConnections[i].rsvp);
            // console.log('Connection ID',connectId);
            userConnList.push(connectId);
        }
        req.session.userprofilesession = userConnList;
        res.render("SavedConnections",{session:activeuserdetails, userconnections: userConnList})
         
    }
});

router.post("/login",urlencodedParser,
    [
        check('username').trim().not().isEmpty().withMessage("Username should'nt be blank"),
        // should contain at least one digit
        // (?=.*[a-z])       // should contain at least one lower case
        // (?=.*[A-Z])       // should contain at least one upper case
        // [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters 
        check('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).withMessage('Password should be minimum of 8 characters and Alphanumeric')
    ], 
    async function(req, res){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            console.log(errors.array())
            res.render("login",{session:undefined, userconnections: undefined,errors_inp: errors.array()})
        }
        else{
                    var userdb_mongo_Obj = new userdb_mongo();
                    var getUser_fromdB = await userdb_mongo_Obj.validateUser(req.body.username,req.body.password);
                   // let pwd_check = await bcrypt.compare(req.body.password, getUser_fromdB[0].password)
                    console.log("Hardcoded User form db",getUser_fromdB);
                    //Here we check the users present in the db, whether there is atleast a user or not
                    /* Here we compare the hashed password after we get it from
                        the database with the plaintext password */
                    if(getUser_fromdB.length>0 && await bcrypt.compare(req.body.password, getUser_fromdB[0].password))
                    {
                        req.session.userdetails = getUser_fromdB[0];
                        //Creating an object of active user connections from UserConnections list
                        var userprofilesession = new userprofile(getUser_fromdB[0].userID, new Array()).getUserConnections();
                        //console.log('profileSession:',userprofilesession);
                        //Creating a session for User profile from User active connections (any updates from Saved Connections)
                        req.session.userprofilesession = userprofilesession;        
                        res.redirect("/Savedconnections*");
                    }else{
                        res.render("login",{session:undefined, userconnections: undefined,errors_inp: new Array({msg:"User and Password not found"})})    
                    }    
            }         
    });

    router.post("/signup",urlencodedParser,
        [
            check('username').trim().not().isEmpty().withMessage("Username should'nt be blank"),
        // should contain at least one digit
        // (?=.*[a-z])       // should contain at least one lower case
        // (?=.*[A-Z])       // should contain at least one upper case
        // [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters 
            check('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).withMessage('Password should be minimum of 8 characters and Alphanumeric'),
            check('firstname').trim().not().isEmpty().withMessage("First Name should'nt be blank"),
            check('lastname').trim().not().isEmpty().withMessage("Last Name should'nt be blank"),
            check('email_address').trim().isEmail().withMessage("Email should'nt be blank"),
            check('addressfield1').trim().not().isEmpty().withMessage("Address 1 should'nt be blank"),
            check('addressfield2').trim().not().isEmpty().withMessage("Address 2 should'nt be blank"),
            check('city').trim().not().isEmpty().withMessage("City should'nt be blank"),
            check('state').trim().not().isEmpty().withMessage("State should'nt be blank"),
            check('zipcode').trim().isInt().not().isEmpty().withMessage("zipcode should'nt be blank and should be Numeric"),
            check('country').trim().not().isEmpty().withMessage("Country should'nt be blank")
        ], 
        async function(req, res){
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                console.log(errors.array())
                res.render("signup",{session:undefined, userconnections: undefined,errors_inp: errors.array()})
            }
            else{
                        var userdb_mongo_Obj = new userdb_mongo();
                        var getUser_signup_fromdB = await userdb_mongo_Obj.addUser(req.body,req.body.password);
                        console.log("Get the user details after signup from db",getUser_signup_fromdB);
                            res.redirect("/login");  
                }         
        });
    
module.exports = router;