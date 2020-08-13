'use strict';

// Load environment variables 
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap-social/bootstrap-social.css'));
app.use(express.static(__dirname + '/public'));
app.use('/assets', express.static(__dirname + '/assets'));


//ROUTES

app.get('/', renderHome);
app.get('/resources', renderResources);
app.get('/blog', renderBlog);
app.get('/contact', renderContact);



function renderHome(req, res) {
    res.sendFile(__dirname + '/views/index.html');
}

function renderResources(req, res) {
    res.sendFile(__dirname + '/views/resources.html');
}

function renderBlog(req, res) {
    res.sendFile(__dirname + '/views/blog.html');
}

function renderContact(req, res) {
    res.sendFile(__dirname + '/views/contact.html');
}



app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
