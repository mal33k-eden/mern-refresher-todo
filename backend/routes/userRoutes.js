const express = require('express')
const { register, login, userProfile } = require('../controllers/usersController')
const router = express.Router()
const { authProtector} = require('../middlewares/authMiddleware')

router.post('/register',register)

router.post('/login',login)

router.get('/me',authProtector,  userProfile)

module.exports = router