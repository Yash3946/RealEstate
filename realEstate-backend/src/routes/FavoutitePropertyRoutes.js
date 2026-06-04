const router = require("express").Router()

const favouritePropertiesController =  require("../controllers/FavouritePropertiesController")

router.get("/favouriteProperties",favouritePropertiesController.getFavourite)
router.post("/addFavourite",favouritePropertiesController.addFavoutrite)
router.put("/update/:id",favouritePropertiesController.updatefavourite)
router.delete("/delete/:id",favouritePropertiesController.deletefavourite)

module.exports = router