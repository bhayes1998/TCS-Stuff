//document.getElementById('btn').addEventListener("click", getMovieStuff());

// const express = require('express');
// const bp = require('body-parser')
// const fs = require('fs');

// const app = express();
// app.use(bp());

// const configz = JSON.parse(fs.readFileSync("./configs.json", "utf-8"));
// const PORT = configz.PORT;

// app.post('/', (req, res) => {

//   console.log(req)
//   if (req.params.id) {
//       console.log(`request recieved, printing params now...`)
//       console.log(req.params.id)
//       res.status(200).send({message: 'request recieved'});
//   }
//   else
//       res.status(500).send({message: 'error: was expecting a message body'})
// })

// // app.get('https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception', function (req, res) {
// //   res.send('hello world')
// // });

// var server = app.listen(PORT, () => console.log('server is up at port ' + PORT));

const express = require('express');
const bp = require('body-parser')
const fs = require('fs');


const app = express();


app.use(bp())

// good habit to start now, setting up config files in the root of the repo
const configz = JSON.parse(fs.readFileSync('./configs.json', 'utf-8'))
const PORT = configz.PORT;


app.post('/', (req, res) => {
    console.log("Bryan Hayes is a buffoon")
    console.log(req)
    if (req.params.id) {
        console.log(`request recieved, printing params now...`)
        console.log(req.params.id)
        res.status(200).send({message: 'request recieved'});
    }
    else
        res.status(500).send({message: 'error: was expecting a message body'})
})



app.get('movie-database-imdb-alternative.p.rapidapi.com',(request, response) => {
    response.status(200).send({ message: 'hello world' })
})



app.listen(PORT, () => console.log(`server is up at port ${PORT}`))



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