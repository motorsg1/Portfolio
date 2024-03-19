import React, { Component } from "react";
import FormStyle from "./FormStyle";
import { TypeAnimation } from 'react-type-animation';

class ContactOne extends Component{
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start pt--20">
                        <div className="col-lg-12 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                            <TypeAnimation className="subtitle"
                                        sequence={[
                                            'My Contact Info.',
                                            100
                                        ]}
                                        wrapper="span"
                                        speed={10}
                                        style={{ fontSize: '1em', fontWeight: 'bold', display: 'inline-block' }}
                                        repeat={Infinity}
                                        />
                                <h2 className="title">Let's Say Hi</h2>
                                <div className="im_address_inner">
                                    <div className="im_address">
                                        <span>Call:</span>
                                        <a className="link im-hover" href="tel:+966 (0)53 405 5078<">+966 53 405 5078</a>
                                    </div>
                                    <div className="im_address mt--5">
                                        <span>Email:</span>
                                        <a className="link im-hover" href="mailto:my@bhesmark.com">bhesmarkperez@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <FormStyle />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactOne;