// Import the schema 

const Todo = require("../models/Todo");

exports.getTodo = async(req,res) =>{
    try{
// fetch all the todos items from the database .
        const todos = await Todo.find({});
    }

    catch(err){

    }
}