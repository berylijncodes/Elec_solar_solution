const mongoose = require("mongoose")
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,required:true,
    },

    email: {
        type: String, required: true,
        unique:true,
    },

    password: {
        type: String,required:true,
    },
    isAdmin: {
        type: Boolean, required: true,
        default: false,
    },
},
    {timestamps: true}
);

userSchema.methods.matchPassword = async((enteredpassword) =>
{
    return await bcrypt.compare(enteredpassword, this.password);
});

userSchema.pre('save,', async (next) =>
{
    if (!this.isModified('password'))
    {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
});

module.exports = user = mongoose.model("User", userSchema);