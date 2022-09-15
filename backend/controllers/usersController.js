
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const User = require('../models/userModel')


const register = asyncHandler(async (req, res)=>{
    const {full_name,email,mobile,password} = req.body
    if (!full_name || !email || !mobile || !password) {
        res.status(400)
        throw new Error('all fields are required')
    }

    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('user already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)

    const user = await User.create({
        full_name, email, mobile,password:hashed
    })

    if (user) {
        res.status(201).json({
            _id:user.id,
            full_name:user.full_name,
            email:user.email,
            mobile:user.mobile,
            token:genJWToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('invalid entry')
    }
     
})

const login = asyncHandler(async (req, res)=>{
    const {email,password} = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error('all fields are required')
    }

    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password)) ){
        res.status(200).json({
            _id: user.id,
            full_name:user.full_name,
            email:user.email,
            mobile:user.mobile,
            token:genJWToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('user does not exists')
    }
})

const userProfile = asyncHandler(async (req, res)=>{  
    const {_id,full_name,email, mobile} = await User.findById(req.user.id)
    res.status(200).json({
        _id,full_name,email,mobile
    })
})

//create JWT
const genJWToken= (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:'30d'})
}


module.exports = {
    register, login, userProfile
}