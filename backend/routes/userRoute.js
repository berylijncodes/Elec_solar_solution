const express = require("express");

const router = express.Router();

//Controller
const { registerUser } = require("../controllers/userController")

//Routes
router.route("/").post(registerUser)

module.exports = router;