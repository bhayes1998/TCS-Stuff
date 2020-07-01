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
        <div class="list-group">
          {this.state.movies.map(movies =>
            <a href="#" class="list-group-item list-group-item-action" key={movies.id}>{movies.title}</a>
            )}
        </div>
      </div>
    )
  }
}

export default App;
