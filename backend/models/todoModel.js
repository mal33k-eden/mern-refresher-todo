const mongoose = require('mongoose') 

const TodoSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, 'title cannot be empty']
    },
    description:{
        type:String,
        minLength:10
    }
}, {timestamps:true})


const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo