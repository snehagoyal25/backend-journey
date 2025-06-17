// Import the schema 

const Todo = require("../models/Todo");

exports.getTodo = async(req,res) =>{
    try{
// fetch all the todos items from the database .
        const todos = await Todo.find({});

        res.status(200)
        .json({
            success : true,
            data : todos,
            message : "Entire todo data is fetched " ,
        })
    }

    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success : false ,
            error : err.message,
            message : "Server error",
        })
    }
}