const express = require("express");
const router = express.Router();

// import controller  
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");

// define API routes
router.post("/createTodo",createTodo);  // for createTodo
router.get("/getTodos",getTodo);  // for getTodo
router.get("/getTodos/:id", getTodoById)  // for getTodo by ID 

module.exports = router;