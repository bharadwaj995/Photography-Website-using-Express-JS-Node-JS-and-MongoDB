//Deifining and acquiring the mongo properties and connecting it to NODE JS
var url = "mongodb+srv://root:root@bharadwaj95-3q91i.gcp.mongodb.net/milestone?retryWrites=true&w=majority"
var mongoose = require("mongoose");
mongoose.connect(url);
// mongoose.connect("mongodb://localhost:27017/milestone4");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
console.log("Connection succeeded.");
});

//creaing a schema for mongo
var Schema = mongoose.Schema;

//creating a schema for user
var user = new Schema({
    userID:String,
    password:String,
    firstname:String,
    lastname:String,
    email_address:String,
    addressfield1:String,
    addressfield2:String,
    city:String,
    state:String,
    zipcode:Number,
    country:String
});
 
var usermodel = mongoose.model("user", user);

//creating a schema for connection
const connection = new Schema({
    userID:String,
    connectionId:Number,
    connection_name:String, 
    connection_category:String,
    details:String,
    dateAndTime:String,
    hostedBy:String,
    venue:String,
    image:String
});

var connectionModel = mongoose.model("connection",connection);

//creating a schema for userProfile
var userProfileSchema = new Schema({
    userID:String,
    userConnections: [{
        connectionId: Number,
        rsvp: String
    }]
})

const userProfileModel = mongoose.model("userProfile",userProfileSchema);

//exporting the #dbconnect 
module.exports.usermodel = usermodel;
module.exports.connectionModel  = connectionModel; 
module.exports.userProfileModel  = userProfileModel;