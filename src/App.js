import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

class App extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    alert('hello');
  }

  render() {
    return (
      <div className="row">
        <ul>
          <li>hello</li>
        </ul>
        <div className="col-sm-4">
          <Card featureImage="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
                title="How To Make Interactive ReactJS Form"
                description="Let's write some interactive form with React"
                link="https://sebhastian.com/interactive-react-form"
                handleOnClick={this.handleOnClick}/>
        </div>
      </div>
    );
  }
}

export default App;
