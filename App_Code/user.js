var mongoose = require('./db.js');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String },
    age: { type: Number }
});

module.exports = mongoose.model('user', UserSchema);