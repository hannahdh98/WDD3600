//imports the path and express
const path = require('path');
const express = require('express');


const rootDir = require('../util/path');
//creates router from express
const router = express.Router();


router.get('/add-product',(req, res, next) => {
   
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});


router.post('/add-product', (req, res, next) => {
    
    console.log(req.body);
    
    res.redirect('/');
});

//exports router
module.exports = router;
