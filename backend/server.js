const express = require("express");
require("dotenv").config()
const path = require("path");
const { notFound, errorHandler } = require("./middleware/errormiddleware");
const userRoutes = require("../backend/routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes")
const connectDB = require("./config/db");


const app = express();

//connect Database
connectDB();

app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/user", userRoutes)
app.use("/api/blog", blogRoutes)


//middleware
app.use(notFound);
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${ PORT }`));


