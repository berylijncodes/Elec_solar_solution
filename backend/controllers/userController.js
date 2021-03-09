const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/generateToken");

//Models
const User = require("../models/User");


//@ts-checkroute   Post/api/user
// @description  register & create token
//@acess    public

const registerUser = asyncHandler(async (req, res) =>
{
    const { name, email, User, password, isAdmin } = req.body
    
    const userExist = await User.findOne({ email })
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
    }
})