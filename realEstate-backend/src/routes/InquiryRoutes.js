const router = require("express").Router()

const InquiryController = require("../controllers/InquiryController")

router.get("/inquires",InquiryController.getInquiry);
router.post("/addinquiry",InquiryController.addInquiry);
router.put("/update/:id",InquiryController.updateInquiry);
router.delete("/delete/:id",InquiryController.deleteInquiry);

module.exports = router
