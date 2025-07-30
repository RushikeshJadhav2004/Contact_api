import mongoose from 'mongoose'

const userSchema= new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    CreatedAt:{type:Date,default:Date.now},
})

export const User = mongoose.models.User || mongoose.model("User", userSchema);
