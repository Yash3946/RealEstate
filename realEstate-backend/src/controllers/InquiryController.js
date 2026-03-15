const InquirySchema = require("../models/InquiryModel")

const getInquiry = async (req,res)=>{
    try{
        const inquiry = await InquirySchema.find()
        
        res.status(200).json({
            Message:"Inquiry is successfully",
            data:inquiry
        })
    }
    catch(err)
    {
        res.status(500).json({
            Message:"Inquiry is rejected",
            err:err
        })
    }
}

const addInquiry = async (req,res)=>{
    
    try
    {
        const saveInquiry = await InquirySchema.create(req.body)
        res.status(200).json({
            Message:"Inquiry is saved",
            data:saveInquiry
        })
    }
    catch(err)
    {
        res.status(500).json({
            Message:"Inquiry is not saved",
            err:err
        })
    }
}

const updateInquiry = async (req,res)=>{
    try
    {
        const update = await InquirySchema.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.status(200).json({
            Message:"update Inquiry is successfully done",
            data:update
        })
    }
    catch(err)
    {
        res.status(500).json({
            Message:"Error in update Inquiry",
            err:err
        })
    }
}

const deleteInquiry = async (req,res)=>{
    try{
        const deleted = await InquirySchema.findByIdAndDelete(req.params.id)

        res.status(200).json({
            Message:"Inquiry deleted successfully",
            data:deleted
        })
    }
    catch(err){
        res.status(500).json({
            Message:"Inquiry is not deleted",
            err:err
        })
    }
}
module.exports={
    getInquiry,
    addInquiry,
    updateInquiry,
    deleteInquiry
}