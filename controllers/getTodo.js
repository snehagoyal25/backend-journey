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


exports.getTodoById = async(req,res) =>{
try{
    // extract todo basis on ID 
    const id = req.params.id;
    const todo = await Todo.findById({_id:id})

    // data for given id is not found 
    if(!todo){
        return res.status(404).json({
            success : false,
            message :"No data found with the given Id",
        })
    }

    // data for given ID is found 
    res.status(200).json({
        success : true,
        data : todo,
        message : `Todo ${id} data is successfully fetched `,
    })

}
catch(err){
    console.error(err);
    res.status(500).json({
        success : false ,
        error : err.message ,
        message : "server error",
    });
}
}