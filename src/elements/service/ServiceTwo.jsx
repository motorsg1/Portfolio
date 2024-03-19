import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor , FiMail, FiCopy } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Website Developtment',
        description: 'Front-End Web Developtment. Except RTL intehgration'
    },
    {
        icon: <FiLayers />,
        title: 'eCommerce Website',
        description: 'eCommerce website increase your sales online.'
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Analytics',
        description: 'Analytics marketing to engage your bussiness strategy.'
    },
    {
        icon: <FiMonitor />,
        title: 'Mobile Development',
        description: 'Desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        icon: <FiMail />,
        title: 'Email Marketing',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.'
    },
    {
        icon: <FiCopy />,
        title: 'Photoshop',
        description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for.'
    },
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services provide for you.',
        description = 'There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.',
        subtitle= 'What we can do for you';
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">{subtitle}</span>
                                <h2 className="title">{title}</h2>
                                <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-12 mt--30">
                            <div className="row service-main-wrapper">
                                {ServiceList.map( (val , i) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                        <a href="/service-details">
                                            <div className="service service__style--2 text-left">
                                                <div className="icon">
                                                    {val.icon}
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">{val.title}</h3>
                                                    <p>{val.description}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
