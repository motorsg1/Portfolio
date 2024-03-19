import React ,{ Component }from "react";
import {  FaAdn } from "react-icons/fa";
import { FiLayers , FiCode , FiMonitor, FiCodepen, FiAlertOctagon } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCodepen />,
        title: 'HTML, CSS, & JavaScript',
        description: 'Designing website and deploy website using native coding.'
    },
    {
        icon: <FiCode />,
        title: 'Frameworks',
        description: 'Creating website in advance modern coding using the React JS, Next JS Framework.'
    },
    {
        icon: <FiLayers/>,
        title: 'Design',
        description: 'Enhancing UI/UX native design for better user experience'
    },
    {
        icon: <FiMonitor />,
        title: 'Responsive',
        description: 'Create responsive pages and themes style'
    },
    {
        icon: <FiAlertOctagon />,
        title: 'Testing and Debugging',
        description: 'Identifying and fixing performance bottlenecks bugs.'
    },
    {
        icon: <FaAdn />,
        title: 'Performance',
        description: 'Improving the application performance increasing speed, stability and efficiency'
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
                            <a href="/">
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
