const mongoose = require ("mongoose");

require("dotenv").config();

const dbConnectc = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
}