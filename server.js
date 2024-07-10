require('dotenv').config()

const express = require('express')
const mongoose= require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const app = express()

app.use(express.json())

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //listen
    app.listen(process.env.PORT, () => {
        console.log('ini udah bisa, lanjutkan sister', process.env.PORT)
    })
    })
    .catch((error) => {
        console.log(error)
    })


