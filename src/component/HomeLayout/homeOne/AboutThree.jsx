import React, { Component } from "react";
import { FiSend, FiCheck } from "react-icons/fi";
import { Link } from 'react-router-dom';


class AboutThree extends Component {

    render(){
        var namesItemOne = [
            'The Philosophy Of business analytics',
            'Fast-Track Your business',
            'Lies And Damn Lies About business',
            'Lies And Damn Lies About business',
            'Lies And Damn Lies About business',
            'The Ultimate Deal On business',
        ];
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-1.png" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <div className="icon">
                                            <FiSend />
                                        </div>
                                        <ul className="list-style--1">
                                            {namesItemOne.map((name, index) => {
                                                return <li key={ index }><FiCheck /> {name}</li>;
                                            })}
                                        </ul>
                                        <div className="purchase-btn mt--30">
                                            <Link className="btn-transparent" to="/">PURCHASE IMROZ</Link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default AboutThree;