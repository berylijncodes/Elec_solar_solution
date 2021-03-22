require("dotenv").config()
const mongoose = require('mongoose');
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
        process.exit(0);
        
    };
};


module.exports = connectDB;


