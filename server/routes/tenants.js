const express = require('express');
const router = express.Router();

// Model
const Tenant = require('../models/Tenants');

// CREATE a new Tenant
router.post('/add-tenant', ( request, response ) => {
    let newTenant = new Tenant( request.body );
    newTenant.save().then( result => {
        response.status(201).send({ status: "A new Tenant has been created", ...request.body });
    });
});

// READ all Tenants
router.get('/', (request, response)=>{
    Tenant.find({})
    .populate('transaction') 
    .then(result => {
        if(typeof result === 'object'){
            response.send(result)
        }
    })
})

//READ a specific Tenant with transaction and room rented
router.get('/:id', ( request, response ) => {
    Tenant.findOne({ _id: request.params.id })
    .populate('transaction')
    .populate('room_rented')
    .then(result => {
        if(typeof result === 'object'){
            response.send(result)
        }
    })
});

// UPDATE a Tenant
router.put('/:id', ( request, response ) => {
    const TenantId = request.params.id;
    Tenant.updateOne(
        { _id: TenantId }, 
        { $set: { ...request.body } 
    })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "A Tenant has been updated", ...request.body });
        }
    });
});

// DELETE a Tenant
router.delete('/:id', ( request, response ) => {
    Tenant.deleteOne({ _id: request.params.id })
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "A Tenant has been deleted"
            });
        }
    });
});

//READ all info, appointment & record of a specific Tenant
router.get('/tree/:id', (request,response) => {
    Tenant.findOne({_id: request.params.id})
    .populate('transaction')
    .then(result => {
        if(typeof result === 'object'){
            response.send(result)
        }
    })
})

module.exports = router;