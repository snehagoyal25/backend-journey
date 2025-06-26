// Update is a put type request.
// Import the model as we need schema that is the description.
const Todo =require("../models/Todo")

// Define route handler 
exports.updateTodo = async(req,res)=>{
    try{
// Extract title and description from the request body 
const{id}= req.params;
const {title , description}= req.body ;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
        ) 
        res.status(200).json({
            success : true,
            data : todo,
            message : "Updated Successfully "
        })
    }

    catch(err){
        console.error(err);
        res.status(500).json({
            success: false ,
            error:err.message,
            message : "Server error ",
        });
    }
}