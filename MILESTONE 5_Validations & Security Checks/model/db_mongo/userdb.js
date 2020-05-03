var dbconnect = require("./dbconnect");
var user = require("../user");
const bcrypt = require('bcrypt');

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


async validateUser(userID,password){
return new Promise(async (resolve,reject)=>{
    dbconnect.usermodel.find({userID:userID},function(error,data){
      if(error){
        console.error(error);
        reject('Please enter the valid credentials of the user');
      }
      else{
        console.log(data);
        resolve(data);
      }
    })
  })
}
  
async addUser(user,password){
//SALTING AND HASHING of User Passwords
  const saltRounds = 10;  //We are setting salt rounds, higher is safer.
  const myPlaintextPassword = password;  //Unprotected password
/* Here we are getting the hashed password from the callback,
we can save that hash in the database */
let hashed_pwd = await bcrypt.hash(myPlaintextPassword, saltRounds);
console.log(hashed_pwd);

return new Promise(async (resolve,reject)=>{
      new dbconnect.usermodel({
        userID:user.username,
        password:hashed_pwd,
        firstname:user.firstname,
        lastname:user.lastname,
        email_address:user.email_address,
        addressfield1:user.addressfield1,
        addressfield2:user.addressfield2,
        city:user.city,
        state:user.state,
        zipcode:user.zipcode,
        country:user.country
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
