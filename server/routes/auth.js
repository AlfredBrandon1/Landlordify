const express = require('express');
const router = express.Router();

// Model
const Landlord = require('../models/Landlords');

// BCrypt
const bcrypt = require('bcrypt');

//Create new Landlord
router.post('/register', async ( request, response ) => {
    const hashedPassword = await bcrypt.hash( request.body.password, 10 );
    const newLandlord = new Landlord({
        ...request.body,
        password: hashedPassword
    });
    newLandlord.save().then( result => {
        response.status(201).send( { 
            status: "An account has been created",
            id: result._id,
            email: request.body.email,
            firstName: request.body.firstName,
            lastName: request.body.lastName
        });
    })

});

//login if Landlord exists and matched the credentials
router.post('/login', ( request, response ) => {
    Landlord.findOne({ email: request.body.email })
        .then( result => {
        bcrypt.compare( request.body.password, result.password, ( err, match ) => {
            if( match ){
                // Autheticated, valid email and password
                response.send(200, { 
                    status: "Login successfuly", 
                    id: result._id,
                    email : request.body.email
                });
            }else{
                response.send(401, {
                    status: "email or password incorrect"
                })
            }    
        });
    });
});


module.exports = router;