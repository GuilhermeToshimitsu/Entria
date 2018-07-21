const fs = require(`fs`)    
var userlogin = require("../models/userLogin")
const Q = require("q")

function teste(){
    userlogin.find().then(function(doc){
        console.log(doc)
    })
}

module.exports = {teste}