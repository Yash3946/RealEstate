const reviewSchema = require("../models/ReviewModel")

const getReview = async (req,res)=>{


try{
    const Reviews = await reviewSchema.find()

    res.status(200).json({
        message:"Review fetch successfully",
        data:Reviews
    })

}
catch(err){
    res.status(500).json({
        message:"Err while fetching Reviews",
        err:err
    })
}
}  

const addReview = async(req,res)=>{

try
{
    const saveReview = await reviewSchema.create(req.body);
    res.status(200).json({
        message:"Review add successfully",
        data:saveReview
    })
}
catch(err)
{
    res.status(500).json({
        message:"Error while adding fetch Reviews ",
        err:err
    })
}
}
const updateReview = async(req,res)=>{

try
{
    const update = await reviewSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json({
        message:"review update successfully",
        data:update
    })
}
catch(err)
{
    res.status(500).json({
        message:"review is not updated",
        err:err
    })
}
}

const deleteReview = async (req,res)=>{
try{
    const deleteReview = await reviewSchema.findByIdAndDelete(req.params.id)

    res.status(200).json({

   
        message:"review deleted successfully",
        data:deleteReview
    })
}
catch(err){
    console.log(err)
    res.status(500).json({
        message:"review is not deleted",
        err:err
    })
}

}
module.exports={
    getReview,
    addReview,
    updateReview,
    deleteReview
}