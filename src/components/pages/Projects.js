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
                            {/* <img className="img-fluid" src="https://i.imgur.com/LeQZ0R0.png"  alt="Second slide" /> */}
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
                            {/* <img className="img-fluid" src="https://i.imgur.com/LeQZ0R0.png"  alt="Second slide" /> */}
                        </div>
                    </div>
                    {/* <div id="carousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <iframe title="lfs_hub" className="d-block text-center carousel-item-smaller" src="https://www.youtube.com/embed/srooZ19w3Tc?controls=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                <div className="carousel-caption d-none d-md-block shadow-lg w-25 m-auto">
                                    <h5>"Legacy Freight Services" Hub</h5>
                                    <p>Web app for an online community based around virtual truck-driving.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 carousel-item-smaller" src="https://i.imgur.com/IbdzDL1.png" alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block shadow-lg w-25 m-auto">
                                    <h5>Mock fitness website</h5>
                                    <a role="button" href="/fitness" className="btn btn-light btn-lg w-50 mt-2">View Page</a>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div> */}
                </div>
            </BrowserRouter>
        );
    }
}

export default Projects;
