// server instantiate 
const express = require ("express");
const app = express();

// app.listen(3000,()=>{
//     console.log("App is running successfully ");
// })


// instead of writing port number , the best practice is to load config from env file.

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// need middleware to parse json request body
app.use(express.json());

// import routes for TODO API 
const todoRoutes = require("./routes/todos"); 

// mount(add) the todo API rountes 
app.use("/api/v1",todoRoutes);

// start server 
app.listen(PORT,()=>{
    console.log(`Server started successfullay at ${PORT} `);
})

// connect to the database
const dbConnect = require("./config/database");
dbConnect(); 

// default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage <h1>`)
});