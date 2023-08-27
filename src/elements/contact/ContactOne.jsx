import React, { Component } from "react";
import FormStyle from "./FormStyle";

class ContactOne extends Component{
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-8 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <span className="subtitle">My Contact Info.</span>
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