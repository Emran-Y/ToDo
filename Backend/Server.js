const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes/todoRoute')
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(cors())

const PORT = process.env.port || 5000

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected To MongoDB'))
    .catch((err) => console.error('Failed To Connect To MongoDB ' + err))


app.use(routes)

app.listen(PORT,() => console.log('Listing on ' + PORT))