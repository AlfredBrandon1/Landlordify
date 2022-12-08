const mongoose = require('mongoose');

const LandlordSchema = new mongoose.Schema({
    firstName : String,
    lastName : String, 
    email : String,
    password: String,
    rooms: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }
    ]

})

module.exports = mongoose.model('Landlord', LandlordSchema);