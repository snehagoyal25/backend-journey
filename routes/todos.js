const express = require("express");
const router = express.Router();

// import controller  
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const{updateTodo} = require("../controllers/updateTodo")

// define API routes
router.post("/createTodo",createTodo);  // for createTodo
router.get("/getTodos",getTodo);  // for getTodo
router.get("/getTodos/:id", getTodoById)  // for getTodo by ID 
router.put("/updateTodo/:id",updateTodo) // for updateTodo

module.exports = router;