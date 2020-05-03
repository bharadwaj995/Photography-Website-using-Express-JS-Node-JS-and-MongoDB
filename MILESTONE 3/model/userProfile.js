var userConnection = require("./userconnection");
//var connectionDB = require("./connectionDB");

module.exports = class userprofile {
    constructor(userID,userConnectionslist){
        this.userID=userID;
        this.userConnectionslist = userConnectionslist;
    }

addConnection(connection,rsvp){
    var addUserConn_tolist = [];
    var added = false;
    if(this.getUserConnections().length==0 || this.getUserConnections() == undefined){
        addUserConn_tolist.push(new userConnection(connection, rsvp));
    }
    else {
        //If the user has existing connections 
       var i;
       var activeUserConn_tolist = this.getUserConnections();
       for(i=0;i<activeUserConn_tolist.length;i++){
        if(activeUserConn_tolist[i].getConnection.getConnectionId == connection.getConnectionId){
            addUserConn_tolist.push(this.updateConnection(activeUserConn_tolist[i],rsvp));
            //addUserConn_tolist.push(new userConnection(connection, rsvp));
            added=true;
        }
        else{
            addUserConn_tolist.push(activeUserConn_tolist[i]);
        }
       }
        if(!added){
            addUserConn_tolist.push(new userConnection(connection, rsvp));
        }
    }
        this.setUserConnections(addUserConn_tolist);
    
}

updateConnection(conn, rsvp){
    conn.rsvp = rsvp;
    return conn;
}

removeConnection(connection){
    var remUserConn_fromlist = this.getUserConnections();
    var removedUsersConList = remUserConn_fromlist.filter(item => item.getConnection.getConnectionId != connection.getConnectionId);
    this.setUserConnections(removedUsersConList);
}

getUserConnections (){
    return this.userConnectionslist;
}

setUserConnections (setconn){
    this.userConnectionslist = setconn;
}

}