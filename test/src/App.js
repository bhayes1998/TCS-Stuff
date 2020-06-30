import React from 'react';
import logo from './logo.svg';
import './App.css';

function GetMovieStuff(){
 
  fetch("localhost:9000", {
    method: 'GET',
    // headers: {
    //     "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
    //     "x-rapidapi-key": "a393c55904msh38065c884e1d56dp16489ajsn614ffa6bb193",
    //     "useQueryString": true
    // }
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
    return data;
  });
}

function App() {
  var data = GetMovieStuff();
  console.log(data.titles.length);
  return (
    <div className="App">
      <header>
        
      </header>
    </div>
  );
}

export default App;
