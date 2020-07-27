import React from 'react';
import '../App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { FaReact, FaPhp } from "react-icons/fa";

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
                    <ul class="list-group list-group-horizontal-xl">
                        <li class="list-group-item">
                            <Link to="/projects/php" className="icon php">
                                <FaPhp size="100%" />
                            </Link>
                        </li>
                        <li class="list-group-item">
                            <Link to="/projects/react" className="icon react">
                                <FaReact size="100%" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </BrowserRouter>
        );
    }
}

export default Projects;
