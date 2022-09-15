const asyncHandler = require('express-async-handler') 
const Todo = require('../models/todoModel')

// @desc fetch all todos 
// @access unprotected 
// @route GET /api/todos 
const getAllTodos = asyncHandler(async (req, res)=>{

    const todos = await Todo.find({user:req.user.id})
    return res.status(200).json(todos)
})

const getATodo = asyncHandler(async (req, res)=>{ 
    const todo = await Todo.findOne({id:req.params.id,user:req.user.id})
    
    return res.status(200).json(todo)
})

const AddTodo = asyncHandler(async (req, res)=>{ 
    if(!req.body.title){
        res.status(400)
        throw new Error('todo title required')
    }
    
    const goal = await Todo.create({...req.body, user:req.user.id}) 
    return res.json(goal)
})

const updateTodo = asyncHandler(async (req, res)=>{
    const todo = await Todo.findOne({id:req.params.id,user:req.user.id})
    if(!todo){
        res.status(400)
        throw new Error('todo not found')
    }

    const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body,{new:true})
    return res.status(200).json(updateTodo)
})

const deleteTodo = asyncHandler( async (req, res)=>{
    const todo = await Todo.findOne({id:req.params.id,user:req.user.id})
    if(!todo){
        res.status(400)
        throw new Error('todo not found')
    }
    await Todo.findByIdAndDelete(req.params.id)
    return res.status(200).json({message:'todo deleted'})
})

 

module.exports = {
    getAllTodos,
    getATodo,
    updateTodo,
    AddTodo,
    deleteTodo
}