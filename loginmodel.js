const mongoose = require('mongoose');
const loginSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required:true},
    email:{type: String, required: true, unique:true},
    password:{type: String, required: true},
    curLevel:{type:Number, default: 1},
});
module.exports = mongoose.model('login',loginSchema);