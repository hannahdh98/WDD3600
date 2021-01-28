
//import path
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//calls bodyParser to parse the body that's sent through the form
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public', )));


app.use('/admin',adminRoutes);
app.use(shopRoutes);

//middleware to handle 404
app.use((req, res, next) => {
    //uses join method to connect to 404.html page 
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// what port the server listens on. (localhost:3000)
app.listen(3000);