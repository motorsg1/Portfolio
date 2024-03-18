import React ,{ Component }from "react";
import {  FaAdn, FaUniversalAccess } from "react-icons/fa";
import { FiLayers , FiCode , FiMonitor, FiCodepen } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCodepen />,
        title: 'React JS',
        description: 'Build website from React JS modern website.'
    },
    {
        icon: <FiCode />,
        title: 'Next JS',
        description: 'Build website from Next JS modern website.'
    },
    {
        icon: <FiLayers/>,
        title: 'UI/UX Design',
        description: 'Design from scratch to live website.'
    },
    {
        icon: <FiMonitor />,
        title: 'Responsive Website',
        description: 'Integrated with the package manger to keep your website in responsive'
    },
    {
        icon: <FaUniversalAccess />,
        title: 'Versatile',
        description: 'Build your website more versatile foe the end-user.'
    },
    {
        icon: <FaAdn />,
        title: 'Performance',
        description: 'Java Script platform emmerge in the industry and it proven the performance.'
    },
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row service-main-wrapper">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2 text-left bg-gray">
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
            </React.Fragment>
        )
    }
}
export default ServiceThree;
