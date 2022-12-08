const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const server  = express();
const port = 2000;

// Middlewares
server.use( morgan('dev') );
server.use( cors() );
server.use( bodyParser.json() );
server.use( helmet() );

// Routes
const LandlordRouter = require('./routes/landlords');
const AuthRouter = require('./routes/auth');
const RoomRouter = require('./routes/rooms');
const TenantRouter = require('./routes/tenants');
const TransactionRouter = require('./routes/transcations')

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/landlordify');

server.get('/', ( request, response ) => {
    response.send(`Welcome to landlordify db`);
});

// Routes
server.use('/api/v1/auth', AuthRouter );
server.use('/api/v1/landlords', LandlordRouter );
server.use('/api/v1/rooms', RoomRouter);
server.use('/api/v1/tenants', TenantRouter)
server.use('/api/v1/transactions', TransactionRouter)

server.listen(
    port, 
    () => {
        console.log(`Server running on port ${ port }`);
    }
);