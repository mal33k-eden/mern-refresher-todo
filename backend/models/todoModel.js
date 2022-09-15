const mongoose = require('mongoose') 

const TodoSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, 'title cannot be empty']
    },
    description:{
        type:String,
        minLength:10
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
}, {timestamps:true})


const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo