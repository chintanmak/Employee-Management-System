const mongoose = require('mongoose')

const Employeemodel = new mongoose.Schema({

    SubmissionDescription: {
        type: String,
       required: true
   },
   
   SubmissionFile: {
        type: String,
       required: true
   },
 
    Task: {
        type: String,
    required: true
    }
})

module.exports = mongoose.model('Employeemodel', Employeemodel)



