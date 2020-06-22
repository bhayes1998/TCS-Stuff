
const fetch = require('node-fetch');
document.getElementById('btn').addEventListener("click", getMovieStuff());

function getMovieStuff(title){
  fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/" + title, {
    method: 'GET',
    headers: {
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key": "a393c55904msh38065c884e1d56dp16489ajsn614ffa6bb193",
        "useQueryString": true
    }
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('output').innerHTML = data.titles[0].title;
    console.log(data.titles[0].title);
  });
}