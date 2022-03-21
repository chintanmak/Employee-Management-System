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

router.get('/get-all-data', async(request, response)=>{

    try{

        await registerationmodelcopy.find()
        .then(data=>{
            response.json(data)
            
        }).catch(err=>response.json(err));
        
    }catch(err){
        console.log(err);
    }
})

router.get('/get-data/:email/:phone', async(req,res)=>{

    try{

        const data = await registerationmodelcopy.findOne({
            email:req.params.email
        });

        console.log(data);

        if(data){
            
            if(data.phone===req.params.phone){
                res.json({status:200,data:data})
                                             
            } else{
                console.log("Invalid Credential")
                res.sendStatus(303).json({status:400,error:"INVALID"})                                
            }

        }
        else{
            console.log("Invalid Credential")
            
            res.json({status:400,error:"INVALID"})                                
                                
        }
        
    }catch(err){
        console.log(err);
    }
})

router.get('/get-data/:id', async(req,res)=>{

    try{

        await registerationmodelcopy.findOne({
            id:req.params.id
        }).then(data=>{
            res.json(data)
        }).catch(err=>res.json(err));
        
    }catch(err){
        console.log(err);
    }
})


module.exports = router