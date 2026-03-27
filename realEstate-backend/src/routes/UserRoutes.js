const router = require("express").Router()
const userController = require("../controllers/UserController")
const validateToken = require("../middleware/AuthMiddleware")

router.get("/users",validateToken,userController.getUsers)
router.post("/register",userController.registerUser)
router.post("/login",userController.loginUser)
router.put("/update/:id",userController.updateUser)
router.delete("/delete/:id",userController.deleteUser)
router.post("/forgotpassword",userController.forgotPassword)
router.put("/resetpassword",userController.resetPassword)

module.exports = router