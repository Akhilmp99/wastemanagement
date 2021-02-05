const mongoose =require("mongoose");
mongoose.connect('mongodb://localhost:27017/Waste');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : String,
    password : String,
});

var UserData = mongoose.model('userdata',UserSchema);

module.exports = UserData;



