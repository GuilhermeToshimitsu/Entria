var mongoose = require('mongoose');
var normalSettings = mongoose.Schema({
    _id:{type:Number,required:true},
    fields0: {type:String, required:true},
    fields1 :String,
    fields2: Number,
})

export const normalModel =mongoose.model('normalModel', normalSettings);

// export  normalModel;