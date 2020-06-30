import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state = { movies: [] }

  componentDidMount(){
    fetch('/users')
    .then(res => res.json())
    .then(movies => this.setState({ movies }));
  }

  render(){
    return (
      <div>
        <ul>
          {this.state.movies.map(movies =>
            <li key={movies.id}>{movies.title}</li>
            )}
        </ul>
      </div>
    )
  }
}

export default App;
