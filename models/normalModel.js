var mongoose = require('mongoose');
var normalSettings = mongoose.Schema({
    field0: String, 
    field1 :String,
    field2: Number,
})

module.exports = mongoose.model('normalModel', normalSettings);