import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiCheck } from "react-icons/fi";
import { Link } from 'react-router-dom';
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactOne from "../elements/contact/ContactOne";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Hello, I’m Bhesmark',
        title: 'I build value through design.',
        description: '',
        buttonText: 'Download My CV',
        buttonLink: 'https://drive.google.com/file/d/1VU2n_ZSRNS5QPTbXmG-aeMCpYK958LIo/view?usp=sharing'
    }
]
const PortfolioLanding = () => {
    let title = 'About Me',
        description = '6 Years working website front-end developer using the Node JS, Next JS, React JS, Github, Wordpress, Woocommerce eCommerce Platform Of Wordpress, Magento eCommerce, OpenCart';
    const PostList = BlogContent.slice(0 , 3);
    return (
        <div>
            <Helmet pageTitle="Bhesmarks" />
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span className="theme-color font-700">{value.category}</span> : ''}
                                            {value.title ? <h1 className="title theme-gradient" dangerouslySetInnerHTML={{__html: value.title}}></h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn mt--20"><a className="btn-default" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120 bg_color--5">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-7.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <span className="subtitle">My About Details</span>
                                            <h2 className="title">{title}</h2>
                                            <p className="description mt_dec--20">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            {/* Start Service Area  */}
            <div id="service" className="fix">
                <div className="service-area creative-service-wrapper pb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30 mb_sm--0">
                                    <span className="subtitle">What I can do for you</span>
                                    <h2 className="title">DESIGN & BUILD</h2>
                                    <p>Anything you can imagine, we can create.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* End Service Area  */} 

            {/* Start Portfolio Area 
            <div id="portfolio" className="fix">
                <div className="portfolio-area pb--120 bg_color--5">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30 mb_sm--0">
                                        <span className="subtitle">My complete project</span>
                                        <h2 className="title">My Latest Project</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, <br/> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
            {/* End Portfolio Area */}            

            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area pb--120 bg_color--5">
                    <ContactOne />
                </div>
            </div>
            {/* End COntact Area */}

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </div>
    )
}

export default PortfolioLanding;
