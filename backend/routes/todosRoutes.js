const express = require('express') 
const router = express.Router()
const {getAllTodos, getATodo, AddTodo, updateTodo, deleteTodo} = require('../controllers/todosController')
const { authProtector } = require('../middlewares/authMiddleware')

// @desc fetch all todos 
// @access unprotected 
// @route GET /api/todos 
router.get('/', authProtector ,getAllTodos)

// @desc fetch one todos 
// @access unprotected 
// @route GET /api/todos/:id
router.get('/:id', authProtector,getATodo)

// @desc add a todo
// @access protected 
// @route POST /api/todos 
router.post('/', authProtector,AddTodo)

// @desc update a todo
// @access protected 
// @route PUT /api/todos/:id
router.put('/:id', authProtector,updateTodo)


// @desc delete a todo
// @access protected 
// @route DELETE /api/todos 
router.delete('/:id', authProtector,deleteTodo)


module.exports = router