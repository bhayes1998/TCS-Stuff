import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
 
  state = { titles: [],
            names: [],
            companies: [] }

  componentDidMount(){
    fetch('/users')
    .then(res => res.json())
    .then(movies => this.setState({ titles: movies.titles,
                                    names: movies.names,
                                    companies: movies.companies }));
  }

  sendData(){
    fetch('http://localhost:3001/users' , {
      method: "POST",
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:  "search=" + document.getElementById('search').value
    })
    .then((result) => result.text())
    .then((info) => { console.log(info)})
    window.location.reload();
  }



  render(){
    return (
      // <div class="App">

      //   <button class="btn btn-outline-primary" onClick={this.sendData}>Search</button>
      // </div> 
    
    
      <div>
        <div class='App'>
        <p>Search for stuff here:</p>
        <input id="search"></input>
        <button class="btn btn-outline-primary" onClick={this.sendData}>Search</button>
        </div>
        
<div class='lists'>
        <div id='titles'>
          <p>Movies</p>
          <div class="list-group">
            {this.state.titles.map(titles =>
            <a href={titles.image} class="list-group-item list-group-item-action" key={titles.id}>{titles.title}</a>
            )}
          </div>
        </div>
        <div id='names'>
          <p>Names</p>
          <div class="list-group">
            {this.state.names.map(names =>
            <a href={names.image} class="list-group-item list-group-item-action" key={names.id}>{names.title}</a>
            )}
          </div>
        </div>
        <div id='companies'>
          <p>Companies</p>
          <div class="list-group">
            {this.state.companies.map(companies =>
            <a href={companies.image} class="list-group-item list-group-item-action" key={companies.id}>{companies.title}</a>
            )}
          </div>
        </div>
        </div>
      </div>
      
    )
  }
}

export default App;
