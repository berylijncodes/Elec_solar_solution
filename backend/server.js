const express = require('express');
require('dotenv').config()
const path = require('path');
const connectDB = require('./config/db');


const app = express();

//connect Database
connectDB()