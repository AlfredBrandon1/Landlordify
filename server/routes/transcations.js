const express = require('express');
const router = express.Router();

//model
const Transaction = require('../models/Transactions');

//CREATE a new Transaction
router.post('/add-transaction', (request, response) => {
    let newTransaction = new Transaction(request.body);
    newTransaction.save().then( result => {
        response.status(201).send({status: "New Transaction added",...request.body });
    });
})

//READ all Transactions
router.get('/', (request, response) => {
    Transaction.find().then((result)=>{
        response.send(result)
    });
});

//READ a specific Transaction
router.get('/:id', (request, response) => {
    Transaction.findOne({ _id: request.params.id })
    .then((result)=>{
        response.send(result)
    });
});

//UPDATE a specific Transaction
router.put('/:id', (request, response) => {
    const TransactionId = request.params.id;
    Transaction.updateOne(
        {_id: TransactionId},
        {$set: {...request.body}}
    ).then(result => {
        if(result.modifiedCount === 1){
            response.send({status: "update saved!", ...request.body})
        }
    })
})

//DELETE a specific Transaction
router.delete('/:id', (request, response) => {
    Transaction.deleteOne({_id: request.params.id}
    ).then( result => {
        if (result.deletedCount === 1 ){
            response.send({status: "A Transaction has been deleted!"})
        }
    })
})

module.exports = router;