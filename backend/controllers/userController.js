const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/generateToken");

//Models
const User = require("../models/User");


//@route   Post/api/user
// @description  register & create token
//@acess    public

const registerUser = asyncHandler(async (req, res) =>
{
    const { name, email, User, password, isAdmin } = req.body
    
    const userExists = await User.findOne({ email })
    if (userExist)
    {
        res.status(400)
        throw new Error("User already exists")
    }
    const user = await User.create({
        name,
        email,
        password,
        isAdmin: isAdmin && isAdmin,
    });
    if (user)
    {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user_email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else
    {
        res.status(400)
        throw new Error("Invalid User  Data")
    }
});


//@route  Get/api/user
//@desc    Get all users
//@access  Public

const getAllUsers = asynHandler(async (req, res) =>
{
    const users = await User.find()
    res.json(users)
});
//@route  Post/api/user/login
//@desc    login &  get user
//@access  Public

const loginUser = asynHandler(async (req, res) =>
{
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password)))
    {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.email,
            token: generateToken(user._id)
            
        })
    } else
    {
        res.status(401)
        throw new Error("invalid Email or Password")
    }
});


module.exports = { registerUser ,getAllUsers, loginUser};