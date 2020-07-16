import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navbar navbar-expand-lg navbar-light bg-white">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/" className="navbar-brand text-uppercase font-weight-bold m-10">
              Adam Greenwood
            </Link>

            <div className="collapse navbar-collapse ml-auto justify-content-between" id="navbar">
              <ul className="navbar-nav ml-auto mt-lg-0 mt-2">
              <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />

        </div>
      </BrowserRouter>
    );
  };
}

export default App;
