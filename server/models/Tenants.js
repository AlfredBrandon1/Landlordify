const mongoose = require('mongoose');

const TenantSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    sex: String,
    age: String,
    contactNo: String, 
    tenantStatus: String,
    room_rented: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }
    ],
    transaction: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }
    ]
})

module.exports = mongoose.model('Tenant', TenantSchema);