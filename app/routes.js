// require express
var express = require('express');

var router = express.Router();

module.exports = router;


// route for home page
router.get('/', function(req, res) {
	res.send('hello!');
});

// route for about page
router.get('/about', function(req, res) {
	res.send('about!');
});

router.get('/contact');
router.post('/contact');

