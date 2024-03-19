import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ReactGA from 'react-ga';


class App extends Component{
    setGA = () => {
        ReactGA.initialize('UA-345019397');
        ReactGA.pageview('/');
      };
      componentDidMount(){
        this.setGA();
    }
    render(){
        return(
            <Fragment>
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {this.props.children}

                 {/* Start Back To Top */}
                 <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                <Footer />
               
            </Fragment>
        )
    }
}

export default App;
