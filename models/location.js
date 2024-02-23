const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    sightingType: {
        type: String,
        required: true

    },
    sightingCoordinatesX: {
        type: String,
        required: true

    },
    sightingCoordinatesY: {
        type: String,
        required: true

    },
    sightingDate: {
        type: Date,
        required: true,
        default: Date.now

    },
    sightingUser: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Location', locationSchema)