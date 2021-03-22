const express = require("express");
const router = express.Router()

//middleware
const { protect, admin } = require("../middleware/authMiddleware")

//controllers
const { getAllBlog, getBlogById, createBlog, updateBlog, deleteBlog } = require("../controllers/blogControllers")

//Routes
router.route("/").get(getAllBlog).post(protect, admin, createBlog)

router
    .route("/:id")
    .put(protect, admin, updateBlog)
    .get(getBlogById)
    .delete(protect, admin, deleteBlog)
    
module.exports = router;