const express = require('express');
const bp = require('body-parser')
const fs = require('fs');
const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
const app = express();
const request = require('request');
const configz = JSON.parse(fs.readFileSync('./configs.json', 'utf-8'))
const PORT = configz.PORT;

app.use(bp.json())


  fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception", {
    method: 'GET',
    headers: {
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key": "a393c55904msh38065c884e1d56dp16489ajsn614ffa6bb193",
        "useQueryString": true
    }
  })
  .then(res => res.json())
  .then(data => {
    // var titleList = "Movies: ";
    // var companyList = "Companies: ";
    // var namesList = "Actors: ";
    // for (var i = 0; i < data.companies.length; i++){
    //   companyList += data.companies[i].title + ", ";
    // }
    // for (var i = 0; i < data.titles.length; i++){
    //   titleList += data.titles[i].title + ", ";
    // }
    // for (var i = 0; i < data.names.length; i++){
    //   namesList += data.names[i].title + ", ";
	// }
	app.post('/', (req, res) => {
		// MongoClient.connect(url, function(err, db) {
		// if (err) throw err;
		//   var dbo = db.db("mydb");
		//   dbo.collection("movies").find({}).toArray(function(err, res){
		// 	if (err) throw err;
		// 	db.close();
		// 	});
		// });
		res.send(data);
	})
  });



app.listen(PORT, () => console.log(`server is up at port ${PORT}`))



 

