module.exports = class connection{
    constructor(connectionId, connection_name, connection_category, details, dateAndTime, hostedBy,venue,image){
      this.connectionId = connectionId;
      this.connection_name = connection_name;
      this.connection_category = connection_category;
      this.details = details;
      this.dateAndTime = dateAndTime;
      this.hostedBy = hostedBy;
      this.venue = venue;
      this.image = image;
    }


    get getConnectionId(){
      return this.connectionId;
    }
    
    get getConnection_name(){
      return this.connection_name;
    }
    
    get getConnection_category(){
      return this.connection_category;
    }
    
    get getDetails(){
      return this.details;
    }
    
    get getDateandtime(){
      return this.dateAndTime;
    }
    
    get getHostedBy(){
      return this.hostedBy;
    }
    
    get getVenue(){
      return this.venue;
    }

    get getImage(){
      return this.image;
    }



    set setConnectionId(connectionId){
        this.connectionId = connectionId;
    }
    
    set setConnection_name(connection_name){
        this.connection_name=this.connection_name;
    }
    
    set setConnection_category(connection_category){
        this.connection_category = connection_category;
    }
    
    set setDetails(details){
        this.details = details;
    }
    
    set setDateAndTime(dateAndTime){
        this.dateAndTime = dateAndTime;
    }
    
    set setHostedBy(hostedBy){
         this.hostedBy = hostedBy;
    }

    set setVenue(venue){
         this.venue = venue;
    }
    
    set setImage(image){
      this.image = image;
    }
  }



