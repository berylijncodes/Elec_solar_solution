const mongoose = require('mongoose');
require("dotenv").config()
const connectDB = async  () => {
    try
    {
        await mongoose.connect("mongodb://localhost:5000invertersolutions",{
            useNewUrlParser: true,
            useUnifiedTopology : true,
            useFindAndModify: false,
            useCreateIndex : true,
        });
        console.log("mongodDB connected");
    } catch (error)
    {
        console.error(error.message);
        process.exit(1);
        
    };
};

module.exports = connectDB;

