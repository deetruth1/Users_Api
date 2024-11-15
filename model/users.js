const mongoose = require('mongoose')
const { type } = require('os')
const usersData = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    phoneNo:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("user",usersData)