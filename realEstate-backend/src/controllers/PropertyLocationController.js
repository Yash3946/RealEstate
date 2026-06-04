const propertyLocationSchema = require("../models/PropertyLocation")

const getpropertyLocation = async(req,res)=>{
    try{

        const location = await propertyLocationSchema.find()

        res.status(200).json({
            message:"Property Location fetched successfully",
            data:location
        })

    }catch(err){
        res.status(500).json({
            message:"error while fetching property location",
            err:err
        })
    }
}

const addPropertyLocation = async(req,res)=>{
    try{

        const addLocation = await propertyLocationSchema.create(req.body)

        res.status(200).json({
            message:"Property Location added successfully",
            data:addLocation
        })

    }catch(err){
        res.status(500).json({
            message:"error while adding property location",
            err:err
        })
    }
}

const updatePropertyLocation = async(req,res)=>{
    try{

        const updateLocation = await propertyLocationSchema.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )

        res.status(200).json({
            message:"Property Location updated successfully",
            data:updateLocation
        })

    }catch(err){
        res.status(500).json({
            message:"error while updating property location",
            err:err
        })
    }
}

const deletePropertyLocation = async(req,res)=>{
    try{

        const deleteLocation = await propertyLocationSchema.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message:"Property Location deleted successfully",
            data:deleteLocation
        })

    }catch(err){
        res.status(500).json({
            message:"error while deleting property location",
            err:err
        })
    }
}

module.exports = {
    getpropertyLocation,
    addPropertyLocation,
    updatePropertyLocation,
    deletePropertyLocation
}