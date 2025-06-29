// Import the model as we need schema that is the description
const Todo = require ("../models/Todo")  

// Define route handler 
exports.createTodo = async(req,res)=>{
    try{
// Extract title and description from request body
        const {title,description} = req.body;

// Create a new Todo object and insert it in database 
        const response = await Todo.create({title,description}); 

// send a json response with a success flag 
        res.status(200).json ({
            success : true,
            data : response ,
            message : "Entry created successfully!!"
        }); 
    }
    catch(err ){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success : false ,
            data : "internal server error",
            message : err.message,
        })
    }
}

