const router = require("express").Router()

const reviewSchema = require("../controllers/ReviewController")

router.get("/reviews",reviewSchema.getReview);
router.post("/save",reviewSchema.addReview);
router.put("/update/:id",reviewSchema.updateReview);
router.delete("/delete/:id",reviewSchema.deleteReview)

module.exports = router
