const expressAsyncHandler = require("express-async-handler");
const asyncHandler = require("express-async-handler");

//models
const Blog = require("../models/Blog");

//@route  GET/api/blog
//@desc    Get all blog post
//@access  Public

const getAllBlog = asyncHandler(async (req, res) =>{
    const pageSize = Number(req.query.pageSize) || 10
    const pageNumber = Number(req.query.pageNumber) || 1
       

    const blogs = await Blog.countDocuments()
    const count = await Blog.find().limit(pageSize).skip(pageSize * (pageNumber - 1))
    
    res.json({blogs,pageNumber,pages:Math.ceil(count / pageSize)})
})

//@route  GET/api/blog:id
//@desc    Fetch single blog
//@access  Public

const getBlogById = asyncHandler(async (req, res) =>{
    const blog = await Blog.findById(req.params.id)
    if (blog){
        res.json(blog)
    } else{
        res.status(404)
        throw new Error("Blog Not Find")
    }
})


//@route  DELETE/api/blog
//@desc    Delete single blog
//@access  Private/admin

const deleteBlog = asyncHandler(async (req, res) =>{
    const blog = await Blog.findById(req.params.id)
    if (blog){
        await blog.remove()
        res.json({message: "Blog Removed"})
    } else{
        res.status(404)
        throw new Error("Blog Not Found")
 }
})


//@route  POST/api/blog
//@desc    Create a new  blog post
//@access  Private/Admin

const createBlog = asyncHandler(async (req, res) =>{
    const blog = new Blog({
        title: "Sample Title",
        image: "Sample Image",
        content: "Sample Content",
        description:"Sample Description",
    })
    const createBlog = await blog.save()
    res.status(201).json(createBlog)
});

//@route  PUT/api/blog
//@desc    Update blog post
//@access  Private/Admin

const updateBlog = asyncHandler(async (req, res) =>{
    const { title, image, content, description } = req.body
    const blog = await Blog.findById(req.params.id)
    if (blog){
        blog.title = title
        blog.image = image
        blog.content = content
        blog.description = description
}
    const updateBlog = await Blog.save()
    res.status(201).json(updateBlog)
})

module.exports = {getAllBlog,getBlogById,createBlog,updateBlog,deleteBlog}