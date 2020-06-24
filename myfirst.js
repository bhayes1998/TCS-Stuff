const express = require('express');
const bp = require('body-parser')
const fs = require('fs');
const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
const app = express();
const configz = JSON.parse(fs.readFileSync('./configs.json', 'utf-8'))
const PORT = configz.PORT;

app.use(bp.json())

// good habit to start now, setting up config files in the root of the repo

var stuff = [];

app.post('/', (req, res) => {
    //res.status(200).send({message: 'Bryan Hayes is a big buffoon'});
    MongoClient.connect(url, function(err, db) {
	if (err) throw err;
  	var dbo = db.db("mydb");
  	dbo.collection("movies").insertOne(req.body, function(err, res){
    	if (err) throw err;
    	console.log("yay!");
    	db.close();
		});
	});
    res.send("Added");
})

app.listen(PORT, () => console.log(`server is up at port ${PORT}`))
// var test = {
// 	title: "The Thing",
// 	year: "1982",
// 	rated: "R",
// 	released: "25 June 1982",
// 	runtime: "102 min",
// 	genre: "Horror, Sci-Fi",
// 	director: "John Carpenter",
// 	writer: "No Idea",
// 	Actors: "Kurt Russell, Keith David, Wilford Brimley",
// 	Plot: "Alien, Antarctica, scary, oooh, aaah",
// 	language: "English",
// 	country: "USA",
// 	awards: "Razzie maybe",
// 	poster: "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg0",
// 	metascore: "100",
// 	imbdRating: "100",
// 	imdbVotes: "1",
// 	imdbID: "dunno",
// 	type: "movie", 
// 	response: "true",
// 	images: null
// };


// function getMovieStuff(title){
 
//   fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/" + title, {
//     method: 'GET',
//     headers: {
//         "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
//         "x-rapidapi-key": "a393c55904msh38065c884e1d56dp16489ajsn614ffa6bb193",
//         "useQueryString": true
//     }
//   })
//   .then(res => res.json())
//   .then(data => {
//     var titleList = "Movies: ";
//     var companyList = "Companies: ";
//     var namesList = "Actors: ";
//     for (var i = 0; i < data.companies.length; i++){
//       companyList += data.companies[i].title + ", ";
//     }
//     for (var i = 0; i < data.titles.length; i++){
//       titleList += data.titles[i].title + ", ";
//     }
//     for (var i = 0; i < data.names.length; i++){
//       namesList += data.names[i].title + ", ";
//     }
//     console.log(data);
//     document.getElementById('output').innerHTML = titleList + "<br>" + namesList + "<br>" + companyList;
//   });
// }