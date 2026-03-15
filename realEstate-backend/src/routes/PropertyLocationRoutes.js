const router = require("express").Router()
const propertyLocationController = require("../controllers/PropertyLocationController")

router.get("/properties",propertyLocationController.getpropertyLocation)
router.post("/save",propertyLocationController.addPropertyLocation)
router.put("/update/:id",propertyLocationController.updatePropertyLocation)
router.delete("/delete/:id",propertyLocationController.deletePropertyLocation)

module.exports = router