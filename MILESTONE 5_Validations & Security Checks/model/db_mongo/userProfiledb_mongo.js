var userProfile = require("../userProfile");
var dbconnect = require("./dbconnect");


//When the user is creating a connection for the first time after the user had SignUp
module.exports = class userProfileDB{
    async addNewUserProfileConnection(userID,connectionId,rsvp){
    return new Promise(async(resolve,reject)=>{
        //When the user had signed up his and he is trying to save a connection his details are to be saved in the DB
    new dbconnect.userProfileModel({userID:userID,userConnections:[{connectionId:connectionId,rsvp:rsvp}]}).
    save(function(err,response){
        if(err){
            console.log(err);
            reject("user's connection has not been added");
        } else
        {
            resolve(response);
        }
    })
    });
}
async addUserConnection(userID,connectionId,rsvp){
    return new Promise(async (resolve,reject)=>{
        //Make sure that given a User ID, his user's connection ID has not been duplicated 
     dbconnect.userProfileModel.updateOne({userID:userID,"userConnections.connectionId":{$ne:connectionId}},
     { $push: { userConnections: {connectionId:connectionId,rsvp:rsvp }}},
     function(err,response) {
         if(err){console.log(err);
        reject("Cannot add user connection");
    }else{
        console.log(response);
        resolve(response)

    }
     });
});
}

async updateUserRSVP(userID,connectionId,rsvp)
{
    return new Promise(async(resolve,reject)=>
    {
        //When a particular user is trying to change the RSVP given the userID and connectionID
        dbconnect.userProfileModel.updateOne({userID:userID,"userConnections.connectionId":{$eq:connectionId}},
        { '$set': {'userConnections.$.rsvp':rsvp}},    
        function(error,response){
        if(error)
        {
            console.log(error);
            reject("Cannot add user connection");
        }
        else
        {
           resolve(response)
        }
    });
});
}
// {connectionId:connectionId,rsvp:rsvp }
async deleteUserConnection(userID,connectionId)
{
    return new Promise(async (resolve,reject)=>
    {
       dbconnect.userProfileModel.updateOne({ userID:userID,"userConnections.connectionId":{$eq:connectionId}},
        // { $pull: { userConnections: { $in:[connectionId]}} },
        {$pull:{userConnections:{connectionId:connectionId}}},
            function(error,response) {
            if(error)
                {
                console.log(error);
                reject("Cannot add user connection");
                }
            else
            {
            resolve(response)
            }
        });
      });
    }
async getUserProfile(userID)
{
    return new Promise(async (resolve,reject)=>
    {
        dbconnect.userProfileModel.find({userID:userID},
            function(error,response) {
                if(error)
                    {
                    console.log(error);
                    reject("Cannot add user connection");
                    }
                else
                {
                resolve(response)
                }
            });
          });
        }
}
