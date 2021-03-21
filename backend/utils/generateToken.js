const jwt = require("jsonwebtoken");
const generateToken = (id) => {

    return jwt.sign((id), "yryrgguugug", {
        expiresIn: "10d",
    });
};

module.exports = { generateToken };

