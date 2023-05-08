const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send("999.999.999");
});

module.exports = router;
