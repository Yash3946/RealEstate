const mongoose = require("mongoose")
const Schema = mongoose.Schema

const propertySchema = new Schema({
    propertyTitle:{
        type:String,
        required:true
    },

    propertyDescription:{
        type:String,
        required:true
    },

    propertyType:{
        type:String,
        enum:["House","Apartment","Land","Commercial"],
        required:true
    },

    listingType:{
        type:String,
        enum:["Sale","Rent"],
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    area:{
        type:Number,
        required:true
    },

    bedrooms:{
        type:Number,
        required:true
    },

    bathrooms:{
        type:Number,
        required:true
    },

    furnishing:{
        type:String,
        enum:["Furnished","Semi Furnished","Unfurnished"],
        default:"Unfurnished",
        required:true
    },

    parking:{
        type:Boolean,
        default:false,
        required:true
    },

    amenities:[
        {
            type:String
        }
    ],

    images:[
        {
            type:String
        }
    ],

    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },

    agentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },

    status:{
        type:String,
        enum:["Available","Sold","Rented"],
        default:"Available"
    },
    approvalStatus: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending"
      }

},{timestamps:true})
module.exports = mongoose.model("property",propertySchema)