import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter a username']
    },
    email:{
        type:String,
        required:[true,'Please enter an Email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Please enter a password'],
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
})

var UserSchema = mongoose.model('UserSchema',userSchema);
export default UserSchema;