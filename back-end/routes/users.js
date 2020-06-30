var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	  fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception", {
    	method: 'GET',
   		headers: {
        	"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        	"x-rapidapi-key": "a393c55904msh38065c884e1d56dp16489ajsn614ffa6bb193",
        	"useQueryString": true
    	}
  	})
  	.then(response => response.json())
  	.then(data => {
    	res.json(data.titles);
  	});
  // res.json([
  // 	{id: 1, name: 'something'},
  // 	{id: 2, name: 'something_else'}
  // 	]);
});

module.exports = router;
