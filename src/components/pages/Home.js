import React from 'react';
import '../App.css';
import $ from 'jquery';


class Home extends React.Component {    
    componentDidMount() {
        $( "#subtitle" ).fadeIn();
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="bg-secondary-grad" style={{padding: "10%", zIndex: "1"}}>
                        <h1 className="text-uppercase font-weight-bold mb-0" id="title">Adam Greenwood</h1>
                        <h3 className="text-lowercase font-weight-light mt-0" id="subtitle">Web Developer & Designer</h3>
                    </div>
                    <div className style={{backgroundColor: "#999999"}}>

                    </div>
                </div>
            </>
        );
    }
}

export default Home;
