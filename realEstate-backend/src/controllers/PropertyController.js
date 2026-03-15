const propertySchema = require("../models/PropertyModel")

const getProperties = async (req,res)=>{


try{
    const properties = await propertySchema.find()

    res.status(200).json({
        message:"property fetch successfully",
        data:properties
    })

}
catch(err){
    res.status(500).json({
        message:"Err while fetching properties",
        err:err
    })
}
}  

const addProperty = async(req,res)=>{

try
{
    const saveProperty = await propertySchema.create(req.body);
    res.status(200).json({
        message:"property add successfully",
        data:saveProperty
    })
}
catch(err)
{
    res.status(500).json({
        message:"Error while  fetch property ",
        err:err
    })
}
}
const updateProperty = async(req,res)=>{

try
{
    const update = await propertySchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json({
        message:"property update successfully",
        data:update
    })
}
catch(err)
{
    res.status(500).json({
        message:"property is not updated",
        err:err
    })
}
}

const deleteProperty = async (req,res)=>{
try{
    const deleteProperty = await propertySchema.findByIdAndDelete(req.params.id)

    res.status(200).json({

   
        message:"property deleted successfully",
        data:deleteProperty
    })
}
catch(err){
    console.log(err)
    res.status(500).json({
        message:"property is not deleted",
        err:err
    })
}

}
module.exports={
    getProperties,
    addProperty,
    updateProperty,
    deleteProperty
}
