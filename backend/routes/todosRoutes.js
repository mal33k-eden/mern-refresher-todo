const express = require('express') 
const router = express.Router()
const {getAllTodos, getATodo, AddTodo, updateTodo, deleteTodo} = require('../controllers/todosController')

// @desc fetch all todos 
// @access unprotected 
// @route GET /api/todos 
router.get('/',getAllTodos)

// @desc fetch one todos 
// @access unprotected 
// @route GET /api/todos/:id
router.get('/:id',getATodo)

// @desc add a todo
// @access protected 
// @route POST /api/todos 
router.post('/',AddTodo)

// @desc update a todo
// @access protected 
// @route PUT /api/todos/:id
router.put('/:id',updateTodo)


// @desc delete a todo
// @access protected 
// @route DELETE /api/todos 
router.delete('/:id',deleteTodo)


module.exports = router