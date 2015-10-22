var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String, //hash created from password
    name: String,
    email: String,
    created_at: {type: Date, default: Date.now}
});

var User = mongoose.model('User', userSchema);
module.exports = User;