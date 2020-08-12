'use strict';

// Load environment variables from the .env
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));


//ROUTES

app.get('/', renderHomePage);



function renderHomePage(request, response) {
    response.sendFile(__dirname + '/views/index.html');
}




app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
