const FavoritePropertySchema=require("../models/FavoritePropertiesModel")

const getFavourite = async (req,res)=>{
    try{
        const inquiry = await FavoritePropertySchema.find()
        
        res.status(200).json({
            Message:" Favorite Property is successfully",
            data:inquiry
        })
    }
    catch(err)
    {
        res.status(500).json({
            Message:"Favorite Property is rejected",
            err:err
        })
    }
}

const addFavoutrite = async (req,res)=>{
    
    try
    {
        const saveFavourite = await FavoritePropertySchema.create(req.body)
        res.status(200).json({
            Message:"Favorite Property is saved",
            data:saveFavourite
        })
    }
    catch(err)
    {
        res.status(500).json({
            Message:"Favorite Property is not saved",
            err:err
        })
    }
}

const updatefavourite = async (req,res)=>{
    try
    {
        const update = await FavoritePropertySchema.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.status(200).json({
            Message:"Favorite Property is successfully updated done",
            data:update
        })
    }
    catch(err)
    {
        res.status(500).json({
            Message:"Error in update Favorite Property  ",
            err:err
        })
    }
}

const deletefavourite = async (req,res)=>{
    try{
        const deleted = await FavoritePropertySchema.findByIdAndDelete(req.params.id)

        res.status(200).json({
            Message:"Favorite Property is deleted successfully",
            data:deleted
        })
    }
    catch(err){
        res.status(500).json({
            Message:"Favorite Property is not deleted",
            err:err
        })
    }
}

module.exports={
    getFavourite,
    addFavoutrite,
    updatefavourite,
    deletefavourite
}