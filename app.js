const express = require('express');
const { sendFile } = require('express/lib/response');

const app = express();

app.use(express.static('public'));

app.get('/',(request,response,next) => response.sendFile(__dirname + '/views/home.html'));

app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

app.get('/photo_gallery', (request, response, next) => response.sendFile(__dirname + '/views/photo_gallery.html'));

app.listen(3000, () => console.log('Listening...'));