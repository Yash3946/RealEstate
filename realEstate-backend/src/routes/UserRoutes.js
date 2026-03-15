const router = require("express").Router()
const userController = require("../controllers/UserController")

router.get("/users",userController.getUsers)
router.post("/register",userController.registerUser)
router.post("/login",userController.loginUser)
router.put("/update/:id",userController.updateUser)
router.delete("/delete/:id",userController.deleteUser)

module.exports = router