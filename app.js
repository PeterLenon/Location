const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(morgan('dev'));


const userRoutes = require('./api/routes/users');
const locationRoutes = require('./api/routes/location');


//routes here
app.use('/users', userRoutes);
app.use('/location',  locationRoutes);

app.use((req, res, next) => {
    const error = new Error('NotFound');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next)=> {
    res.status(error.status || 500);
    res.json({
        message: error.message
    })
})

module.exports = app;