import React from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends React.Component{
  // state = { movies: [] }

  // componentDidMount(){
  //   fetch('/users')
  //   .then(res => res.json())
  //   .then(movies => this.setState({ movies }));
  // }

  // sendData(){
  //   fetch('http://localhost:3001/users' , {
  //     method: "POST",
  //     mode: 'no-cors',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     body:  "search=" + document.getElementById('search').value
  //   })
  //   .then((result) => result.text())
  //   .then((info) => { console.log(info)})
  //   window.location.reload();
  // }



  render(){
    return (
      // <div class="App">

      //   <button class="btn btn-outline-primary" onClick={this.sendData}>Search</button>
      // </div> 
    
    
      <div class="App">
              <p>Search for stuff here:</p>
        <input id="search"></input>
      <button class="btn btn-outline-primary">Search</button>
        <div class="list-group">
        </div>
      </div>
      
    )
  }
}

export default App;
