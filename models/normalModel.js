var mongoose = require('mongoose');
var normalSettings = mongoose.Schema({
    _id     : String, 
    field1 :String,
    field2: Number,
})

module.exports = mongoose.model('normalModel', normalSettings);