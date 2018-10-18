import React, { Component, Placeholder } from 'react';
import './App.css';
import { fetchMovies } from '../api';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  async getMovies() {
    this.setState({
      movies: await fetchMovies()
    });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div>
        <h2 className="text-center text-uppercase mb-3 mt-2">Movie List</h2>
        <ul className="list-group list-movie m-auto">
          {
            this.state.movies.map((value, key) => <li key={key} className="list-group-item mb-2 bg-dark">
              <a href={value.url}>
                {value.title}<br />
                <div className="">
                  <div className="back-link float-right" >➜</div>
                </div>
              </a>
            </li>)
          }
        </ul>
      </div>
    );
  }
}