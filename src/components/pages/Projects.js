import React from 'react';
import '../App.css';
import { BrowserRouter, Link } from 'react-router-dom'; 

class Projects extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid bg-secondary">
                    <div style={{padding: "2%"}}>
                        <h1 className="text-uppercase font-weight-bold mb-0">Projects</h1>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <ul class="list-group list-group-horizontal-xl">
                            <li class="list-group-item image-nav flex-fill ">
                                <Link to="/projects/php">
                                    <img src={require('../assets/php.svg')} alt="PHP" />
                                </Link>
                            </li>
                            <li class="list-group-item image-nav flex-fill ">
                                <Link to="/projects/react">
                                    <img src={require('../assets/react.svg')} alt="React" />
                                </Link>
                            </li>
                            <li class="list-group-item">Morbi leo risus</li>
                        </ul>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Projects;
