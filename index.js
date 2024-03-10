const express = require("express")
const app = express()
var cors = require('cors')
const USer= require('./routes/UserRoute')

app.use(express.json())

app.use(cors())



app.use("/user",USer)

app.listen(8000)

 
 
