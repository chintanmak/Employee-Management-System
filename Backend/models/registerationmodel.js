const mongoose = require('mongoose')

const registerationmodel = new mongoose.Schema({

name: {
    type: String,
    required: true
},

email: {
    type: String,
    required: true
},

phone: {
    type: String,
    required: true
},

role: {
    type: String,
    required: true
},

date:{
        type: Date,
        default:Date.now   
}

})

module.exports = mongoose.model('empproject', registerationmodel)



