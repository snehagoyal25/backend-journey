// Importing the model 
const Todo = require("../models/Todo");
// defining route handler 
exports.deleteTodo = async(req,res)=>{
    try{
        const{id}=req.params;
        await Todo.findByIdAndDelete(id);

        res.json({
            success: true,
            message :"Todo deleted ",
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success :false ,
            error : err.message ,
            message :"Server error ",
        });
    }
}