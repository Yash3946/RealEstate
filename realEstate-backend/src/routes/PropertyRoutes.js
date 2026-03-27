const router = require("express").Router();
const propertyController = require("../controllers/PropertyController");
const upload = require("../middleware/uploadMiddlewarev2");

// =======================
// GET ALL PROPERTIES
// =======================
router.get("/properties", propertyController.getProperties);

// =======================
// ADD PROPERTY (simple - JSON)
// =======================
router.post("/save", propertyController.addProperty);

// =======================
// CREATE PROPERTY WITH IMAGES
// =======================
router.put(
    "/update/:id",
    upload.array("propertyImages", 5),
    propertyController.updateProperty
  );

// =======================
// UPDATE PROPERTY WITH IMAGES
// =======================
router.put(
  "/update/:id",
  upload.array("propertyImages", 5), // 🔥 update images also
  propertyController.updateProperty
);

// =======================
// DELETE PROPERTY
// =======================
router.delete("/delete/:id", propertyController.deleteProperty);

// =======================
// GET ALL (WITH LIMIT)
// =======================
router.get("/all", propertyController.getAllProperties);

// =======================
// SEARCH PROPERTY
// =======================
router.get("/search", propertyController.searchProperty);

module.exports = router;