import React from 'react';
import '../App.css';
import $ from 'jquery';
import Social from '../assets/Social.js';

class Home extends React.Component {    
    componentDidMount() {
        $( "#subtitle" ).fadeIn();
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="bg-secondary-grad" style={{padding: "7.5%", zIndex: "1"}}>
                        <h1 className="text-uppercase font-weight-bold mb-0" id="title">Adam Greenwood</h1>
                        <h3 className="text-lowercase font-weight-light mt-0" id="subtitle">Web Developer & Designer</h3>
                        <hr style={{width: "10%"}}></hr>
                        <Social />
                    </div>
                    <div className="row">
                        <div className="col-4 p-5">
                            <h2 className="text-uppercase text-muted" style={{marginTop: "10%"}}>Skills</h2>
                        </div>
                        <div className="col-8 p-5 text-left">
                            <p className="mb-0">HTML</p>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mb-0">CSS</p>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mb-0">JavaScript</p>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mb-0">PHP</p>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mb-0">React</p>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mb-0">Laravel</p>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width: "5%"}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
