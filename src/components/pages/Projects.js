import React from 'react';
import '../App.css';
import { BrowserRouter } from 'react-router-dom';

class Projects extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid bg-secondary">
                    <div style={{padding: "2%"}}>
                        <h1 className="text-uppercase font-weight-bold mb-0">Projects</h1>
                    </div>
                </div>

                <div className="container-fluid w-100 pt-5">
                    <div className="row">
                        <div className="col-sm mb-4">
                            <div class="card bg-dark text-white shadow-lg">
                                <img class="card-img" src="https://i.imgur.com/6WQadLA.png" alt="Card" />
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <h5 class="card-title">"Legacy Freight Services" Hub</h5>
                                    <p class="card-text">Online "Hub" for an online community.</p>
                                    <a role="button" href="https://hub.legacyfreightservices.co.uk/" class="btn btn-light" target="_blank" rel="noopener noreferrer">Visit Live</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm mb-4">
                            <div class="card bg-dark text-white shadow-lg">
                                <img class="card-img" src="https://i.imgur.com/LeQZ0R0.png" alt="Card" />
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <h5 class="card-title">Mock Fitness Site</h5>
                                    <p class="card-text">Basic website for a mock fitness company.</p>
                                    <a role="button" href="/fitness" class="btn btn-light">Visit Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Projects;
