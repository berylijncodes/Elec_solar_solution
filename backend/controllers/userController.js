const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/generateToken");

//Models
const User = require("../models/User");


//@ts-checkroute   Post/api/user
// @description  register & create token
//@acess    public

const registerUser = asyncHandler(async (req, res) =>
{
    const (name,email,User.password,isAdmin) = req.body
})