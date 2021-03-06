const express = require("express");

const router = express.Router();

//Controller
const { registerUser, getAllUsers, loginUser } = require("../controllers/userController")

//Routes
router.route("/").post(registerUser).get(getAllUsers)
router.post("/login", loginUser)


module.exports = router;