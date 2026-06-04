const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"buyer",
        enum:["owner","admin","buyer","agent"]
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },

    profilePic:{
        type:String,
        default:""
    },
    status:{
        type:String,
        default:"active",
        enum:["active","inactive","deleted","blocked"]
    }
})
module.exports = mongoose.model("users",userSchema)
