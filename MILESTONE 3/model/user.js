module.exports = class user{
    constructor(userID,firstname,lastname,email_address,addressfield1,addressfield2,city,state,zipcode,country){
      this.userID = userID;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email_address = email_address;
      this.addressfield1 = addressfield1;
      this.addressfield2 = addressfield2;
      this.city = city;
      this.state = state;
      this.zipcode=zipcode;
      this.country=country;
    }


    get getuserID(){
      return this.userID;
    }
    
    get getfirstname(){
      return this.firstname;
    }
    
    get getlastname(){
      return this.lastname;
    }
    
    get getemail_address(){
      return this.email_address;
    }
    
    get getaddressfield1(){
      return this.addressfield1;
    }
    
    get getaddressfield2(){
      return this.addressfield2;
    }
    
    get getcity(){
      return this.city;
    }

    get getstate(){
      return this.state;
    }

    get getcountry(){
        return this.country;
    }

    get getzipcode(){
        return this.zipcode;
    }
  
    set setuserID(userID){
        this.userID = userID;
    }
    
    set setfirstname(firstname){
        this.firstname=this.firstname;
    }
    
    set setlastname(lastname){
        this.lastname = lastname;
    }
    
    set setemail_address(details){
        this.details = details;
    }
    
    set setaddressfield1(addressfield1){
        this.addressfield1 = addressfield1;
    }
    
    set setaddressfield2(addressfield2){
         this.addressfield2 = addressfield2;
    }

    set setcity(city){
         this.city = city;
    }
    
    set setstate(state){
      this.state = state;
    }

    set setcountry(country){
        this.country = country;
      }

    set setzipcode(zipcode){
    this.zipcode = zipcode;
      }
  }



