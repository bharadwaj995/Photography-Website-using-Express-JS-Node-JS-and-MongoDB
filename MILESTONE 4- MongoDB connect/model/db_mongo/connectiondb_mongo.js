var dbconnect = require("./dbconnect");
var connections = require("../connection");

module.exports = class connectionDB
{
    async getConnection(connectionId) {
    return new Promise(async (resolve, reject)=> {
    //to find whether the userID given matches the userID in the db
      dbconnect.connectionModel.find({connectionId:connectionId}, function(err, data){
        if (err) {console.error(err);
          reject('Connection not find');
        } else {
            if(data.length>0){
           resolve(new connections(data[0].connectionId, data[0].connection_name, data[0].connection_category, data[0].details, data[0].dateAndTime, data[0].hostedBy,data[0].venue,data[0].image)); 
         }
         else{
         resolve(new connections())
         }
         }
        });
      });
  }
  async getConnections(){
      return new Promise(async(resolve,reject)=> {
          //fecth all the connections stored in db
        dbconnect.connectionModel.find({}, function(err,connectionDetails){
            if (err) {console.error(err);
                reject('Connection not find');
              } else {
                  //("abcd",connectionDetails);
                var connectionObjlist = [];
                connectionDetails.forEach(function(each_connection){
                    var conObj = new connections(each_connection.connectionId,each_connection.connection_name,each_connection.connection_category,
                        each_connection.details,each_connection.dateAndTime,each_connection.hostedBy,each_connection.venue,each_connection.image);
                        connectionObjlist.push(conObj);
                });
                  resolve(connectionObjlist);
          }
      });
  });
  }

//Loop through all the available categories
async categories(){
      var topics = [];
      var getConnections = await this.getConnections()
      getConnections.forEach(function(data)
      {
          //(data);
          if (!topics.includes(data.connection_category))
          {
              topics.push(data.connection_category);
          }
      });
      return topics;
    }

async addConnections(conObj,userID){
    return new Promise(async (resolve, reject)=> {
        //to find whether the userID given matches the userID in the db
          new dbconnect.connectionModel({userID:userID,connectionId:conObj.getConnectionId, connection_name:conObj.getConnection_name, connection_category:conObj.getConnection_category, details:conObj.getDetails, dateAndTime:conObj.getDateandtime, hostedBy:conObj.getHostedby,venue:conObj.getVenue,image:conObj.getImage}).
          save(function(err, data){
            if (err) {console.error(err);
              reject('Connection not find');
            } else {
               resolve(data); 
            }
            });
          });
}

// db.Employee.find().sort({Employeeid:-1}).forEach(printjson)
async getConIDsequence(){
    return new Promise(async (resolve, reject)=> {
        dbconnect.connectionModel.find({},function(error,response){
            if (error) 
            {
                console.error(error);
                reject('Connection not find');
            } else 
                {
                 resolve(response); 
                }  
        }).sort({connectionId:-1}).limit(1)
    })
}







}    

