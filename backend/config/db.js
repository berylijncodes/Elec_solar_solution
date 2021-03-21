const mongoose = require('mongoose');
require("dotenv").config()
const connectDB = async  () => {
    try
    {
        await mongoose.connect(process.env.MONGO_DB_CONNECTION_URL, {
        
            useNewUrlParser: true,
            useUnifiedTopology : true,
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

