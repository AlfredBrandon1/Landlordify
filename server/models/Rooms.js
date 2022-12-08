const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    roomName: String,
    roomType: String,
    roomPrice: Number,
    roomStatus: String,
    tenants: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
    ]
})

module.exports = mongoose.model('Room', RoomSchema); 