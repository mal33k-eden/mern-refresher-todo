var todoList = require('../data')
// @desc fetch all todos 
// @access unprotected 
// @route GET /api/todos 
const getAllTodos = (req, res)=>{
    return res.status(200).json(todoList)
}

const getATodo = (req, res)=>{ 
    var todo = todoList.filter((t)=>t.id == req.params.id)
    if (todo.length < 1) {
        throw err
    }
    return res.status(200).json(todo)
}

const AddTodo = (req, res)=>{ 
    var newId = todoList.length + 1 
    todoList.push({id:newId,...req.body}) 
    return res.json(todoList)
}

const updateTodo = (req, res)=>{
    var todoObj = todoList.find((todo)=>todo.id == req.params.id)
    todoObj.title = req.body.title;
    todoObj.desc = req.body.desc;
    return res.json(todoObj)
}

const deleteTodo = (req, res)=>{
    var index = todoList.some((todo)=>req.params.id == todo.id)
    if (!index) {
        res.statusCode = 400
       throw new Error('in valid todo id')
    } 
    todoList.splice(req.params.id -1,1 ) 
    return res.json(todoList)
}

 

module.exports = {
    getAllTodos,
    getATodo,
    updateTodo,
    AddTodo,
    deleteTodo
}