import React from 'react';
import '../App.css';
import { AiOutlineTwitter, AiFillGithub, AiFillGitlab, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";

class Social extends React.Component {
    
    render() {
        return (
            <div className="row mt-4" style={{width: "20%", margin: "auto"}}>
                <div className="col">
                    <a href="https://twitter.com/adamgr_" rel="noopener noreferrer" target="_blank" className="icon">
                        <AiOutlineTwitter size="30px" className="twitter"/>
                    </a>
                </div>
                <div className="col">
                    <a href="https://github.com/adam-gre" rel="noopener noreferrer" target="_blank" className="icon">
                        <AiFillGithub size="30px" className="github"/>
                    </a>
                </div>
                <div className="col">
                    <a href="https://gitlab.com/adamgr_" rel="noopener noreferrer" target="_blank" className="icon">
                        <AiFillGitlab size="30px" className="gitlab" />
                    </a>
                </div>
                <div className="col">
                    <a href="https://linkedin.com/in/adam-gre/" rel="noopener noreferrer" target="_blank" className="icon">
                        <AiFillLinkedin size="30px" className="linkedin" />
                    </a>
                </div>
                <div className="col">
                    <a href="&#109;a&#105;lt&#111;&#58;&#97;dam&#64;ad%&#54;1m&#37;67%72&#46;%6&#52;%65%&#55;6" rel="noopener noreferrer" target="_blank" className="icon">
                        <AiTwotoneMail size="30px" className="email" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Social;
