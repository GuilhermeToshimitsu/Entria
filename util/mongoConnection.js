const mongoose = require('mongoose');
const link = require("./constants").constants.mongoLink

function initialize(){
    mongoose.connect(link,{useNewUrlParser:true});
    // mongoose.connect('mongodb://localhost:27017/my_database');
    mongoose.connection.on('connected',function(){
        console.log("Inicia conexão com: "+link);
    })
    
    mongoose.connection.on("error",function(err){
        console.log("Erro na conexão: "+ err);
    })
    
    mongoose.connection.on('disconnected',function(){
        console.log("Conexão disconectada");
    })
    
    mongoose.connection.on("open",function(){
        console.log("Conexão Aberta");
    })
    
    process.on('SIGINT',function(){
        mongoose.connection.close(function(){
            console.log('Fechar Mongo com APP');
            process.exit(0);
        })
    })
}

module.exports={initialize

}