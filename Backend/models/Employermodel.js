const mongoose = require('mongoose')

const Employermodel = new mongoose.Schema({

    title: {
        type: String,
       required: true
   },
   
   Description: {
        type: String,
       required: true
   },
   
   Deadline: {
        type: String,
       required: true
   },

   ApplicationTitle: {
    type: String,
     required: true
    },

    ApplicationDescription: {
        type: String,
    required: true
    },

    ApplicationStatus: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Employermodel', Employermodel)



