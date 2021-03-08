const express = require('express');
require('dotenv').config()
const path = require('path');
const {Notfound, errorHandler} = require('./middleware/errormiddleware')
const connectDB = require('./config/db');


const app = express();

//connect Database
connectDB();

app.use(express.json({ extended: false }));

//Define Routes


//middleware
app.use(Notfound);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${ PORT }`));