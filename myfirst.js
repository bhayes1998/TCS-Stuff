//document.getElementById('btn').addEventListener("click", getMovieStuff());

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
    var titleList = "Movies: ";
    var companyList = "Companies: ";
    var namesList = "Actors: ";
    for (var i = 0; i < data.companies.length; i++){
      companyList += data.companies[i].title + ", ";
    }
    for (var i = 0; i < data.titles.length; i++){
      titleList += data.titles[i].title + ", ";
    }
    for (var i = 0; i < data.names.length; i++){
      namesList += data.names[i].title + ", ";
    }
    console.log(data);
    document.getElementById('output').innerHTML = titleList + "<br>" + namesList + "<br>" + companyList;
  });
}