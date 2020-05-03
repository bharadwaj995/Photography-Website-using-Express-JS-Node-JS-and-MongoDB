var connectionDetails = 
[
    {connectionId:'con1' , connection_category:'BEFORE YOUR TRIP' ,connection_name:'KNOW YOUR CAMERA',details:'SHUTTER SPEED,IMAGE STABILIZATION,SENSOR SIZE:-Digital cameras are truly astonishing tools! It is remarkable, the photographic challenges they digitally solve in an instant to capture beautiful images. To use your camera to its full capability you’ve got to be familiar with its functions. Unfortunately, this means you’ll have to read (then re-read- repeat many times) the manual! These articles are intended to replace the technical aspects of a user’s manual. Each article contains at least one sentence as to when to use that particular function.,', dateAndTime:'24th February, 2020 10:00 AM', hostedBy:'Bharadwaj',venue:'Times Square, New York city, NY',image:'../assets/images/kycam.jpg'},
    {connectionId:'con2' , connection_category:'BEFORE YOUR TRIP' ,connection_name:'RESEARCH PLACES YOU WANT TO SEE (USE PINTEREST, INSTAGRAM, GOOGLE, FRIENDS/FAMILY)',details:'This helps us figure out what\'s there—what the place is about and what subjects we need to cover. Read brochures and travel books. Go to libraries, bookstores, or onto the Web. Talk to friends who have been there. Pick up travel information at the country\'s embassy. Find whatever you can that is relevant, and devour it. Understanding the customs and traditions of a place is vital. For one thing, you want to be sure you act in a way that is not rude or offensive while you are there, and it\'s hard to know what\'s acceptable and what isn\'t with some knowledge. It can also help you understand things people do that at first encounter you might consider incomprehensible or even horrifying.' ,dateAndTime:'24th February, 2020 10:00 AM',hostedBy:'Sachin',venue: 'Hudson yards, New York City, NY',image:'../assets/images/kyplace.jpg'},
    {connectionId:'con3' , connection_category:'WHEN YOU ARRIVE:' ,connection_name:'GET UP EARLY TO BEAT THE TOURISTS',details:'There are few sounds in the world that are worse than the blaring of an alarm clock. Beep, beep, beep. It so rarely signifies anything good, or enjoyable. Mostly it just means it\'s time to go to work.\''  ,dateAndTime:'25th February, 2020 10:00 AM',hostedBy:'Federer',venue: 'Central Park, New York City, NY',image:'../assets/images/getupearly.jpg'},
    {connectionId:'con4' , connection_category:'WHEN YOU ARRIVE:' ,connection_name:'STAY OUT LATE TO BEAT THE TOURISTS',details:'Enroll in some online photography tutorials. Invest in a travel photography workshop. Go out and practice on a regular basis'  ,dateAndTime:'25th February, 2020 10:00 AM',hostedBy:'Hamilton', venue:'Central Park, New York City, NY',image:'../assets/images/stayoutlate.jpg'},
    {connectionId:'con5' , connection_category:'WHEN YOU ARRIVE:' ,connection_name:'HAVE PATIENCE',details:'Photography is about really seeing what’s in front of you. Not just with your eyes, but with your heart & mind too. This requires dedicated time and attention. Slow down and make a conscious effort at becoming aware of your surroundings before pressing the shutter.Pay attention to details.'  ,dateAndTime:'26th February, 2020 10:00 AM',hostedBy:'Nadal',venue:'Brooklyn Bridge, New York City, NY',image:'../assets/images/havepatience.jpg'},
    {connectionId:'con6' , connection_category:'PHOTOGRAPHY TIPS' ,connection_name:'USE THE RULE OF THIRDs',details:'This well-known photography rule still holds true. When in doubt, make sure you\'re using the rule of thirds to set up your photo.When framing a photo, imagine the scene divided up as above. Think about what elements of the photo are most important, and try to position them at or near the lines and intersections of the grid. They don\'t have to be perfectly lined up as long as they\'re close.For landscpaes: place it along one of the horizontal line.For Vertical Subjects: split a photo in two, in much the same way as a horizon can do horizontally. To avoid this, position them off-centre in your composition</li>',dateAndTime:'26th February, 2020 10:00 AM',hostedBy:'Vettel',venue:'Brooklyn Bridge, New York City, NY',image:'../assets/images/twothirdrule.jpg'},
    {connectionId:'con7' , connection_category:'PHOTOGRAPHY TIPS' ,connection_name:'PLAY AROUND WITH COMPOSITION',details:'Composition, at its most basic, is how you place your subject (and everything else) in your image.'  ,dateAndTime:'26th February, 2020 10:00 AM',hostedBy:'Djokovic',venue:'Hudson yards, New York City, NY',image:'../assets/images/composition.jpg'},
    {connectionId:'con8', connection_category:'LEARN BASIC POST-PROCESSING TIPS',connection_name:'ADJUST THE HORIZON',details:'It is easier to fix the horizon because we can make sure the horizon is straight before we take the image with our camera. Some tripod comes with an inbuilt fluid level that you can use to make sure the horizon is straight. You can also get a fluid level mount to the hot shoe of your camera. These are relatively cheap on the internet. It is a bit more challenging to control for perspective. For example, when photographing architecture, unless you are high up above the ground, the building is going to be tilted. This is because we often shoot from the ground with our camera tilted upwards to include the whole building into the frame. For those who are serious about architectural photography, you consider getting a tilt-shift lens for that purpose.',dateAndTime:'28th February, 2020 10:00 AM',hostedBy:'Murray',venue:'Manhattan Centre, New York City, NY',image:'../assets/images/adjusthorizon.jpg'},
    {connectionId:'con9', connection_category:'LEARN BASIC POST-PROCESSING TIPS',connection_name:'ADJUST THE EXPOSURE AND THE CONTRAST',details:'After you have straightened the horizon and removed any unwanted or distracting elements from the frame, next adjust the exposure of the image. This adjusts the brightness. If the image is too dark, add light in and if the image is too bright, reduce light. Keep in mind that often times adjusting brightness will affect the contrast of the image as well. This can be fixed by adjusting the Contrast Slider in Lightroom. It makes the brightest parts of the image brighter and the darkest parts darker, and improves the overall look of the adjusted image.',dateAndTime:'28th February, 2020 10:00 AM',hostedBy:'Murray',venue:'Manhattan Centre, New York City, NY',image:'../assets/images/expcontrast.jpg'},
];


var savedconnections = 
[
    {connectionId:'con5' , connection_category:'PHOTOGRAPHY TIPS' ,connection_name:'KNOW YOUR CAMERA',details:'SHUTTER SPEED,IMGAE STABILIZATION,SENSOR SIZE',dateAndTime:'26th February, 2020 10:00 AM',hostedBy:'Nadal',venue:'Times Square, New York city, NY',image:'../assets/images/kycamera.jpg'},
    {connectionId:'con6' , connection_category:'PHOTOGRAPHY TIPS' ,connection_name:'USE THE RULE OF THIRD\'s',details:'This well-known photography rule still holds true. When in doubt, make sure you\'re using the rule of thirds to set up your photo.</li><li>When framing a photo, imagine the scene divided up as above. Think about what elements of the photo are most important, and try to position them at or near the lines and intersections of the grid. They don\'t have to be perfectly lined up as long as they\'re close.</li><li>For landscpaes: place it along one of the horizontal lines</li><li>For Vertical Subjects: split a photo in two, in much the same way as a horizon can do horizontally. To avoid this, position them off-centre in your composition</li>',dateAndTime:'27th February, 2020 10:00 AM',hostedBy:'Vettel',venue: 'Hudson yards, New York City, NY',image:'../assets/images/twothirdrule.jpg'},
    {connectionId:'con7' , connection_category:'PHOTOGRAPHY TIPS' ,connection_name:'PLAY AROUND WITH COMPOSITION',details:'Composition, at its most basic, is how you place your subject (and everything else) in your image.'  ,dateAndTime:'28th February, 2020 10:00 AM',hostedBy:'Djokovic',venue:'Central Park, New York City, NY',image:'../assets/images/composition.jpg'},
    {connectionId:'con8', connection_category:'LEARN BASIC POST-PROCESSING TIPS',connection_name:'ADJUST THE HORIZON',details:'It is easier to fix the horizon because we can make sure the horizon is straight before we take the image with our camera. Some tripod comes with an inbuilt fluid level that you can use to make sure the horizon is straight. You can also get a fluid level mount to the hot shoe of your camera. These are relatively cheap on the internet. It is a bit more challenging to control for perspective. For example, when photographing architecture, unless you are high up above the ground, the building is going to be tilted. This is because we often shoot from the ground with our camera tilted upwards to include the whole building into the frame. For those who are serious about architectural photography, you consider getting a tilt-shift lens for that purpose.',dateAndTime:'28th February, 2020 10:00 AM',hostedBy:'Murray',venue:'Manhattan Centre, New York City, NY',image:'../assets/images/adjusthorizon.jpg'},
    {connectionId:'con9', connection_category:'LEARN BASIC POST-PROCESSING TIPS',connection_name:'ADJUST THE EXPOSURE AND THE CONTRAST',details:'After you have straightened the horizon and removed any unwanted or distracting elements from the frame, next adjust the exposure of the image. This adjusts the brightness. If the image is too dark, add light in and if the image is too bright, reduce light. Keep in mind that often times adjusting brightness will affect the contrast of the image as well. This can be fixed by adjusting the Contrast Slider in Lightroom. It makes the brightest parts of the image brighter and the darkest parts darker, and improves the overall look of the adjusted image.',dateAndTime:'28th February, 2020 10:00 AM',hostedBy:'Murray',venue:'Manhattan Centre, New York City, NY',image:'../assets/images/expcontrast.jpg'},
];


var connection = require('./connection');
var categories = function(){
    var topics = [];
    connectionDetails.forEach(function(data)
    {
        
        if (!topics.includes(data.connection_category))
        {
            topics.push(data.connection_category);
        }
   
    });
    return topics;

};

var getconnections = function(){
    var connectionObjlist = [];
    connectionDetails.forEach(function(each_connection){
        var conObj = new connection(each_connection.connectionId,each_connection.connection_name,each_connection.connection_category,
            each_connection.details,each_connection.dateAndTime,each_connection.hostedBy,each_connection.venue,each_connection.image);
            connectionObjlist.push(conObj);
    });
    return connectionObjlist;
};


var getconnection = function(connectionId)
    {
    var con = new connection();
    connectionDetails.forEach(function(each){
        if(each.connectionId == connectionId){
            con = new connection(each.connectionId,each.connection_name,each.connection_category,each.details,each.dateAndTime,each.hostedBy,each.venue,each.image);
        }     
    });
    return con;
}

var getsavedconections = function(){
    var savedconnectionsObjects = [];
    savedconnections.forEach(function(each_savedconnection){
        var savedconObj = new connection(each_savedconnection.connectionId,each_savedconnection.connection_name,each_savedconnection.connection_category,each_savedconnection.details,each_savedconnection.dateAndTime, each_savedconnection.hostedBy,each_savedconnection.venue,each_savedconnection.image);
        savedconnectionsObjects.push(savedconObj);

    })
return savedconnectionsObjects;
}

module.exports.getconnections=getconnections;
module.exports.categories=categories;
module.exports.getconnection=getconnection;
module.exports.getsavedconections = getsavedconections;
