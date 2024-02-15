require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');

app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => {
    console.error('MongoDB connection error:', error)
})
db.once('open', () => console.log("Connected to Database"))

app.use(express.json())






const locationsRouter = require('./routes/locations')
app.use('/locations', locationsRouter)







app.listen(3000, () => console.log('Server Started'))
