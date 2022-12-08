const express = require('express');
const router = express.Router();

//Model
const Landlord = require('../models/Landlords');

//CREATE a Landlord and login is in Auth.js

//READ all the Landlords
router.get('/', (request, response)=>{
    Landlord.find()
        .then((result)=>{
            response.send(result)
        }) 
});

//READ a specific Landlord
router.get('/:id', ( request, response ) => {
    Landlord.findOne(
        { _id: request.params.id },
        { password: 0 }
    )
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
});

// UPDATE a Landlord 
router.put('/:id/update', ( request, response ) => {
    const landlordId = request.params.id;
    Landlord.updateOne(
        { _id: landlordId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "A Landlord has been updated", ...request.body });
        }
    });
});

// DELETE a Landlord 
router.delete('/:id/delete', ( request, response ) => {
    Landlord.deleteOne({ _id: request.params.id })
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "A Landlord has been deleted"
            });
        }
    });
});

module.exports = router;