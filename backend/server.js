const express = require('express')
const app = express()
require ('dotenv').config()
const home = require('./routes/home')

const PORT =  process.env.PORT || 5000

app.use('/bruh' , home)


app.listen(PORT, ()=> {
    console.log(`server running at ${PORT}` )
})