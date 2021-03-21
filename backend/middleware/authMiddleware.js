const jwt = require("jsonwebtoken");
const asynHandler = require("express-async-handler");

const User = require("../models/User");
const { generateToken } = require("../utils/generateToken");
const protect = asynHandler(async (req, res, next) =>
{
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bear"))
    {
        try
        {
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await user.findById(decoded.id).select("-password");
        } catch (error)
        {
            console.error(error)
            res.status(401)
            throw new Error("Not Authorized,Token Failed");
        }
    }
    if (!token)
    {
        res.status(401)
        throw new Error("Not authorized, No Token")
    }
});

const admin = (req, res, next) =>
{
    if (req.user && req.user.isAdmin)
    {
        next()
    } else{
        res.status(401)
        throw new Error("Not authorized as An Admin")
    }
};




module.exports = {protect,admin}

