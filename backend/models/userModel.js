const mongoose = require('mongoose')


const userSchema =  mongoose.Schema({
    full_name:{
        type:String,
        required:[true, 'Full name field is required']
    },
    email:{
        type:String,
        required:[true, 'E-mail field is required']
    },
    mobile:{
        type:String,
        required:[true, 'Mobile field is required']
    },
    password:{
        type:String,
        required:[true, 'Password field is required']
    },
    
})

const User = mongoose.model('User', userSchema)
module.exports =User