const PropertyVisitSchema = require("../models/PropertyVisitModel")

const getPropertyVisit = async (req, res) => {
    try {
      const propertyVisit = await PropertyVisitSchema
        .find()
        .populate("propertyId")
        .populate("buyerId")
        .populate("ownerId");
  
      res.status(200).json({
        message: "Property visits fetched",
        data: propertyVisit
      });
  
    } catch (err) {
      res.status(500).json({
        message: "Error fetching visits",
        err: err
      });
    }
  };
const addPropertyVisit = async (req,res)=>{
    try
    {
        const saveProperty = await PropertyVisitSchema.create(req.body)

        res.status(200).json({
            Message:"property added successfully",
            data:saveProperty
        })
    }
    catch(err)
    {
        res.status(500).json({
            Message:"property is not added",
            err:err
        })
    }
}


const updatePropertyVisit = async (req,res)=>{
    try
    {
        const updateVisit = await PropertyVisitSchema.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
         )

         res.status(200).json({
            Message:"updated visit successfully",
            data:updateVisit
         })
    }
    catch(err)
    {
        res.status(500).json({
            Message:"proprty visited is not done",
            err:err
        })
    }
}

const deletePropertyVisit = async (req,res)=>{

try
{
    const deleteVisit = await PropertyVisitSchema.findByIdAndDelete(req.params.id)
    
    res.status(200).json({
        Message:"deleted visit successfully",
        data:deleteVisit
     })
}
catch(err)
{
    res.status(500).json({
        Message:"proprty visit is deleted",
        err:err
    })
}
}

module.exports={
    getPropertyVisit,
    addPropertyVisit,
    updatePropertyVisit,
    deletePropertyVisit
}