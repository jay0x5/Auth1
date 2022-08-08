const mongoose = require('mongoose')

const schema = mongoose.Schema


const userschema = new schema({

    email:{
        type: String,
        required: true
    },

    hashpass:{
        type: String,
        required: false
    },

    jtoken:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('UserBase',userschema)
