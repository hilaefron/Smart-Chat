const mongoose=require('mongoose')

const User= new mongoose.model('Users',new mongoose.Schema({
    socketId:{type:String},
    name:{type:String}
}))

exports.User= User;
