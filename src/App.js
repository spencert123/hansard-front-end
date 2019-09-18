import React, { Component } from 'react';
import './App.css';
import { listenerCount } from 'events';
import { format } from 'util';

function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top"
           src={props.featureImage}
           alt="cap image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">{props.link}</a>
        <button onClick={props.handleOnClick}>hello</button>
      </div>
    </div>
  );
}

function SearchBar(props) {
  return (
    <div className="search-bar">
        <input id="search-bar-input" type="text" placeholder="Search.."/>
        <button onClick={props.handleSearchOnClick} type="submit">Submit</button>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleSearchOnClick = this.handleSearchOnClick.bind(this);
    this.state = {
      mps: [
        "Diane Abbott",
        "Diane Aboot"
      ]
    }
  }

  handleOnClick() {
    alert('hello');
  }

  handleSearchOnClick(e) {
    e.preventDefault();
    const searchText = document.getElementById('search-bar-input');
    const mpList = document.getElementById("mp-list");
    let mps = this.state.mps;

    if(searchText.value) {
      mps.push(searchText.value);
      this.setState({
        mps: mps
      });
    }
    else {
      alert('Need to put something in search bar.');
    }
  }

  render() {
    return (
      <div className="row">
        <SearchBar handleSearchOnClick={this.handleSearchOnClick}/>
        <ul id='mp-list'>
          {this.state.mps.map(mp => (
            <li key={mp}>{mp}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
