import React from 'react';
import '../App.css';
import { AiOutlineTwitter, AiFillGithub, AiFillGitlab, AiFillLinkedin } from "react-icons/ai";

class Social extends React.Component {
    
    render() {
        return (
            <div className="row mt-4" style={{width: "20%", margin: "auto"}}>
                <div className="col">
                    <a href="https://twitter.com/adamgr_" target="_blank" className="social twitter">
                        <AiOutlineTwitter size="30px" className="twitter"/>
                    </a>
                </div>
                <div className="col">
                    <a href="https://github.com/adam-gre" target="_blank" className="social">
                        <AiFillGithub size="30px" className="github"/>
                    </a>
                </div>
                <div className="col">
                    <a href="https://gitlab.com/adamgr_" target="_blank" className="social">
                        <AiFillGitlab size="30px" className="gitlab" />
                    </a>
                </div>
                <div className="col">
                    <a href="https://linkedin.com/in/adam-gre/" target="_blank" className="social">
                        <AiFillLinkedin size="30px" className="linkedin" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Social;
