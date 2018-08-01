var mongoose = require('mongoose');
var ownerSettings = mongoose.Schema({
    _id:{type:Number,required:true},
    name: String,
    type: Number,
    places: [Number],

})

export const ownerModel = mongoose.model('owner', ownerSettings);