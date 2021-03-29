require("dotenv").config()
const mongoose = require('mongoose');
const connectDB = async  () => {
    try
    {
        await mongoose.connect(process.env.MONGO_DB_CONNECTION_URL,{
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


