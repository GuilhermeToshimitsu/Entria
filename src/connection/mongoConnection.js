const mongoose = require('mongoose');
const link = require("../util/constants").serverconstants.mongoLink;


function initialize(){
    mongoose.connect(link,{useNewUrlParser:true});
    // mongoose.connect('mongodb://localhost:27017/my_database');
    mongoose.connection.on('connected',function(){
        console.log("Connected to: "+link);
    })
    
    mongoose.connection.on("error",function(err){
        console.log("Connection Error: "+ err);
    })
    
    mongoose.connection.on('disconnected',function(){
        console.log("Disconnected from MongoDB");
    })
    
    mongoose.connection.on("open",function(){
        console.log("Connection Open");
    })
    
    process.on('SIGINT',function(){
        mongoose.connection.close(function(){
            console.log('Connection Closed before Server Down');
            process.exit(0);
        })
    })
}

module.exports={initialize

}