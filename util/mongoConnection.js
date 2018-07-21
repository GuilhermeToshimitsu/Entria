const mongoose = require('mongoose');
mongoose.connect('mongodb://db/my_database');
// mongoose.connect('mongodb://localhost:27017/my_database');

module.exports={mongoose}