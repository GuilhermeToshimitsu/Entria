var mongoose = require('mongoose');
var normalSettings = mongoose.Schema({
    _id:{type:Number,required:true},
    field0: {type:String, required:true},
    field1 :String,
    field2: Number,
})

module.exports = mongoose.model('normalModel', normalSettings);