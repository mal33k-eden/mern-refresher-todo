const express = require('express')
const { errorHandler } = require('./middlewares/errorMiddleware')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT  
const todosRoutes = require('./routes/todosRoutes')
 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/todos', todosRoutes)

app.get('/', (req, res)=>{
    return res.json('hello ')
})


app.use(errorHandler)
app.listen(port, ()=>{
    console.log(`app started on PORT ${port}`)
})
