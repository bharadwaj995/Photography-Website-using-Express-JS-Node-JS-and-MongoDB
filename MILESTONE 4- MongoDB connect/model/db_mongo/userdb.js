var dbconnect = require("./dbconnect");
var user = require("../user");

module.exports = class userdb
{
    async getUser(userID) {
    return new Promise(async (resolve, reject)=> {
    //to find whether the userID given matches the userID in the db
      dbconnect.usermodel.find({userID:userID}, function(err, data){
        if (err) {console.error(err);
          reject('Could not find any goal');
        } else {
          console.log(data);
          resolve(new user(data[0].userID,data[0].firstname,data[0].lastname,data[0].email_address,data[0].addressfield1,data[0].addressfield2,data[0].city,data[0].state,data[0].zipcode,data[0].country)
          );
        };
      });
    });
  }

  async addUser(){
    return new Promise(async (resolve,reject)=>{
      new dbconnect.usermodel({
        userID:"Steve McCurry and Bharadwaj Arya",
        firstname:"Steve",
        lastname:"McCurry",
        email_address:" SteveMcCurry@.nikon.com",
        addressfield1:"9201 Univ Building",
        addressfield2:"UNC Charlotte",
        city:"Charlotte",
        state:"NC",
        zipcode:28262,
        country:"USA"
      }).save(function(error,response){
        if(error)
        {
          console.log(error);
          reject("User not added");
        }else
        {
          resolve(response);
        }
      })
    });
  }
}
