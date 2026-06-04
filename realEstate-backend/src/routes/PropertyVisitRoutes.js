const router = require("express").Router()

const propertyVisitController = require("../controllers/PropertyVisitController")


router.get("/visits",propertyVisitController.getPropertyVisit)
router.post("/addvisit",propertyVisitController.addPropertyVisit)
router.put("/update/:id",propertyVisitController.updatePropertyVisit)
router.delete("/delete/:id",propertyVisitController.deletePropertyVisit)

module.exports=router