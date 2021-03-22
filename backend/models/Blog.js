const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    Image: {
        type: String,
        required: true,
    },

    Description: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

module.exports = Blog = mongoose.model("Blog",blogSchema)