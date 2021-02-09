//import path
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

//app.set('view engine', 'ejs'); 
app.set('view engine', 'ejs');
app.set('views', 'views')

//const adminData = require('./routes/admin'); 
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//calls bodyParser to parse the body that's sent through the form
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));  

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
// what port the server listens on. (localhost:3000)
app.listen(3000);