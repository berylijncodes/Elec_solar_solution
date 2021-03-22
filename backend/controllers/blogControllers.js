const expressAsyncHandler = require("express-async-handler");
const asyncHandler = require("express-async-handler");

//models
const Blog = require("../models/Blog");

//@route  GET/api/blog
//@desc    Get all blog post
//@access  Public


//@desc    Get all blog post
const getAllBlog = asyncHandler(async (req, res) =>{
    const pageSize = Number(req.query.pageSize) || 10
    const pageNumber = Number(req.query.pageNumber) || 1
       

    const blogs = await Blog.countDocuments()
    const count = await Blog.find().limit(pageSize).skip(pageSize * (pageNumber - 1))
    
    res.json({blogs,pageNumber,pages:Math.ceil(count / pageSize)})
})