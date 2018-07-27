var mongoose = require('mongoose');
var bcrypt = require("bcrypt");
var userSchema = mongoose.Schema({
	local: {
		username:  { type: String, required: true, unique: true },
		password:  { type: String, required: true},
		permission: {type: Number, default: 0},
		email:  { type: String, required: true, unique: true },
		tel : String,
		resetPasswordToken: String,
		resetPasswordExpires: Date,
	}
});

userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.local.password)
}

module.exports = mongoose.model('userLogin', userSchema);	