const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const registerationmodelcopy = require('../models/registerationmodel')
const randomstring = require('randomstring');

router.post('/addEmployee', async(request, response)=> {
    console.log(request.body)

    const id = randomstring.generate({
        length: 12,
        charset: 'hex'
      });

    try{
        const registeration = await new registerationmodelcopy({
            id:id,
            name:request.body.name,
            email:request.body.email,
            phone:request.body.phone,
            role:request.body.role
        })
        registeration.save()
        .then(data =>{
            response.sendStatus(200)
        })
        .catch(error =>{
            response.sendStatus(404)
        })
    }catch(err){
        console.log(err);
        response.sendStatus(404)
    }
})
module.exports = router