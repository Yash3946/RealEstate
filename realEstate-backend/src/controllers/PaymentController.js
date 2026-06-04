const paymentSchema = require("../models/PaymentModel")

const getPayment = async (req,res)=>{


try{
    const payments = await paymentSchema.find()

    res.status(200).json({
        message:"payment fetch successfully",
        data:payments
    })

}
catch(err){
    res.status(500).json({
        message:"Err while fetching payment",
        err:err
    })
}
}  

const addPayment = async(req,res)=>{

try
{
    const savePayment = await paymentSchema.create(req.body);
    res.status(200).json({
        message:"payment added successfully",
        data:savePayment
    })
}
catch(err)
{
    res.status(500).json({
        message:"Error while fetch payment ",
        err:err
    })
}
}
const updatepayment = async(req,res)=>{

try
{
    const update = await paymentSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json({
        message:"payment update successfully",
        data:update
    })
}
catch(err)
{
    res.status(500).json({
        message:"payment is not updated",
        err:err
    })
}
}

const deletePayment = async (req,res)=>{
try{
    const deletePayment = await paymentSchema.findByIdAndDelete(req.params.id)

    res.status(200).json({

   
        message:"property deleted successfully",
        data:deletePayment
    })
}
catch(err){
    console.log(err)
    res.status(500).json({
        message:"payment is not deleted",
        err:err
    })
}

}
module.exports={
    getPayment,
    addPayment,
    updatepayment,
    deletePayment
}