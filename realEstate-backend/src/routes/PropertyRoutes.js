const router = require("express").Router()
const propertyController = require("../controllers/PropertyController")

router.get("/properties",propertyController.getProperties)
router.post("/save",propertyController.addProperty)
router.put("/update/:id",propertyController.updateProperty)
router.delete("/delete/:id",propertyController.deleteProperty)
module.exports = router