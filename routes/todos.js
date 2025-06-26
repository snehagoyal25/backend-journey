const express = require("express");
const router = express.Router();

// import controller  
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const{updateTodo} = require("../controllers/updateTodo");
const{deleteTodo} = require("../controllers/deleteTodo");

// define API routes
router.post("/createTodo",createTodo);  // for createTodo
router.get("/getTodos",getTodo);  // for getTodo
router.get("/getTodos/:id", getTodoById)  // for getTodo by ID 
router.put("/updateTodo/:id",updateTodo) // for updateTodo
router.delete("/deleteTodo/:id",deleteTodo)  // for deleting todo 

module.exports = router;