const router = require("express").Router();
const controller = require("../controllers/PropertyController");
const upload = require("../middleware/uploadMiddlewarev2");
const validateToken = require("../middleware/AuthMiddleware");

// ADMIN → all properties
router.get("/", validateToken, controller.getProperties);

// BUYER → all properties
router.get("/all", controller.getAllProperties);

// OWNER → my properties
router.get("/my", validateToken, controller.getMyProperties);

// CREATE
router.post(
  "/create",
  validateToken,
  upload.array("propertyImages", 5),
  controller.createProperty
);

// DELETE
router.delete("/delete/:id", validateToken, controller.deleteProperty);

module.exports = router;