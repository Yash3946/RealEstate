const router = require("express").Router()
const paymentSchema = require("../controllers/PaymentController")

router.get("/payments",paymentSchema.getPayment);
router.post("/addpayment",paymentSchema.addPayment);
router.put("/update/:id",paymentSchema.updatepayment);
router.delete("/delete/:id",paymentSchema.deletePayment);

module.exports = router