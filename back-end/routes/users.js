var express = require('express');
var fetch = require('node-fetch');
var bodyParser = require('body-parser');
var router = express.Router();
var term = "inception";

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* GET users listing. */
router.get('/', function(req, res, next) {
	  fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/" + term, {
    	method: 'GET',
   		headers: {
        	"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        	"x-rapidapi-key": "a393c55904msh38065c884e1d56dp16489ajsn614ffa6bb193",
        	"useQueryString": true
    	}
  	})
  	.then(response => response.json())
  	.then(data => {
    	res.json(data);
  	});

});

router.post('/', function (req, res) {
  const obj = JSON.parse(JSON.stringify(req.body)); 
  term = obj.search;
  res.send('POST request to the homepage')
})

module.exports = router;
