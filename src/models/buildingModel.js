var mongoose = require('mongoose');
var placeSettings = mongoose.Schema({
    _id:{type:Number,required:true},//zip+nber+apt -> string concat -> number
    zip: {type:Number, required:true},
    number :{type:Number, required:true},
    city: String,//cidade
    addr: String,//rua
    state: String,//estado
    apt:Number,
    lat:String,
    lon:String,
    price: Number,
    owner: Number,
    

})

export const placeModel = mongoose.model('place', placeSettings);

// export  normalModel;