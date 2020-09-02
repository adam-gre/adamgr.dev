import React from 'react';
import '../App.css';
import { BrowserRouter } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";

class Fitness extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <section id="header" className="relative text-left p-5">
                    <div className="row">
                        <div className="col-sm" style={{paddingTop: "10%", paddingBottom: "10%", paddingLeft: "5%"}}>
                            <h1 className="text-uppercase text-white font-weight-bold font-montserrat">Build your best self</h1>
                            <h3 className="text-white font-montserrat">Fitness plans tailored for you</h3>
                            <a href="#" className="btn btn-danger btn-lg font-montserrat mt-4">Speak to our experts <IoIosArrowForward /></a>
                        </div>
                    </div>
                    <div class="divider-bottom">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <div className="row text-center pt-5">
                        <div className="col-sm">
                            <AiOutlineDown className="text-white animate__animated animate__bounce animate__infinite animate__slow" />
                        </div>
                    </div>
                </section>
                <section id="results" className="mt-5" style={{position: "relative"}}>
                    <h1 className="pt-5">Client Results</h1>
                    <div className="col client mt-5">                
                        <div className="d-flex flex-row text-left">
                            <img className="mr-3 img-responsive rounded" src="https://i.imgur.com/Dztt5tD.jpg" width="128px" height="128px" alt="Generic placeholder" />
                            <div className="ml-3">                            
                                <h5 className="">Mariah Skinner</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            </div>
                        </div>    
                    </div>          
                    <div className="col client mt-5">   
                        <div className="d-flex flex-row text-left">
                            <img className="mr-3 img-responsive rounded" src="https://i.imgur.com/BUdKxPK.jpg" width="128px" height="128px" alt="Generic placeholder" />
                            <div className="ml-3">   
                                <h5 className="mt-0">Timothy Leon</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            </div>
                        </div>     
                    </div>  
                    <div className="col client mt-5">        
                        <div className="d-flex flex-row text-left">
                            <img className="mr-3 img-responsive rounded" src="https://i.imgur.com/eXhuhbI.jpg" width="128px" height="128px" alt="Generic placeholder" />
                            <div className="ml-3">   
                                <h5 className="mt-0">Aariz Povey</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="pricing" className="text-light pt-5 mt-5 pb-5" style={{background: "linear-gradient(45deg, rgba(18,18,18,1) 0%, rgba(47,47,47,1) 100%)"}}>
                    <h1 className="mt-5 font-size-24">PLANS & PRICING</h1>
                    <div className="row pb-5 w-100">
                        <div className="col-sm-4 pricing pb-5">
                            <h3>BASIC</h3>
                            <p>3 sessions per week</p>
                            <p>15 week program</p>
                            <p>Group training</p>
                            <h4>£20 <span className="font-weight-light">per session</span></h4>
                            <a role="button" href="#pricing" className="btn btn-primary btn-lg w-50 mt-2">RESERVE YOUR SLOT</a>
                        </div>
                        <div className="col-sm-4 pricing pb-5">
                            <h3>INTERMEDIATE</h3>
                            <p>4 sessions per week</p>
                            <p>15 week program</p>
                            <p>Group training with individual coaching</p>
                            <h4>£25 <span className="font-weight-light">per session</span></h4>
                            <a role="button" href="#pricing" className="btn btn-primary btn-lg w-50 mt-2">RESERVE YOUR SLOT</a>
                        </div>
                        <div className="col-sm-4 pricing pb-5">
                            <h3>SUPER</h3>
                            <p>5 sessions per week</p>
                            <p>15 week program</p>
                            <p>1-on-1 training with personal trainer</p>
                            <h4>£35 <span className="font-weight-light">per session</span></h4>
                            <a role="button" href="#pricing" className="btn btn-primary btn-lg w-50 mt-2">RESERVE YOUR SLOT</a>
                        </div>
                    </div>
                    <h4><span className="font-weight-light">or call us on</span> 01632 960187</h4>
                </section>

                <section className="text-light pt-5 pb-2" style={{background: "#000"}}>
                    <p>© FunctionalFitness 2020</p>
                </section>
            </BrowserRouter>
        );
    }
}

export default Fitness;
