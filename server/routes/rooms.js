const express = require('express');
const router = express.Router();

// Model
const Room = require('../models/Rooms');

// CREATE a new Room
router.post('/add-room', ( request, response ) => {
    let newRoom = new Room( request.body );
    newRoom.save().then( result => {
        response.status(201).send({ status: "A new Room has been created", ...request.body });
    });
});

// READ all Rooms
router.get('/', (request, response)=>{
    Room.find({})
    .populate('tenants')
    .then((result)=>{
        response.send(result)
    }) 
})

//READ a specific Room with tenants
router.get('/:id', ( request, response ) => {
    Room.findOne({ _id: request.params.id })
    .populate('tenants')
    .then(result => {
        if(typeof result === 'object'){
            response.send(result)
        }
    })
});

// UPDATE a Room
router.put('/:id', ( request, response ) => {
    const RoomId = request.params.id;
    Room.updateOne(
        { _id: RoomId }, 
        { $set: { ...request.body } 
    })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "A Room has been updated", ...request.body });
        }
    });
});

// DELETE a Room
router.delete('/:id', ( request, response ) => {
    Room.deleteOne({ _id: request.params.id })
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "A Room has been deleted"
            });
        }
    });
});

//Display room info with tenants
router.get('/:id/tree', (request,response) => {
    Room.findOne({_id: request.params.id})
    .populate('tenants')
    .then(result => {
        if(typeof result === 'object'){
            response.send(result)
        }
    })
})

module.exports = router;