// imports the path and express
const path = require('path');
const express = require('express');
// gets the path from util
const rootDir = require('../util/path');
//creates the router
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
//exports the router
module.exports = router;
