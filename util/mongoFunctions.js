const fs = require(`fs`)    
var userlogin = require("../models/userLogin")
var normalModules = require("../models/normalModel")
const Q = require("q")

function teste(){
    userlogin.find().then(function(doc){
        console.log(doc)
    })
}

module.exports = {teste}