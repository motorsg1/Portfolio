import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactOne from "../elements/contact/ContactOne";
import ServiceList from "../elements/service/ServiceList";
import { Helmet } from 'react-helmet';
import { TypeAnimation } from 'react-type-animation';


const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Hello, I’m Bhesmark Perez',
        title: 'I build and code through design.',
        description: '',
        buttonText: 'Let’s Connect',
    }
]

const PortfolioLanding = () => {
    let title = 'PROFESSIONAL SUMMARY',
        description = 'Self-motivated Developer adds a high level of experience over more than seven years of collabo-rating and working on multiple web-based projects. Passionate, hardworking coder with a penchant for developing customized interfaces that factor in unique demands for accessibility, reachability, and security. Organized approach to meeting multiple, concurrent deadlines. Pulls from active knowledge of the current technology landscape to promote best practices in web development.';
    return (
        <div>
           <Helmet><title>bhesmark</title></Helmet>
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
                                            {value.category ? <h3 className="theme-color font-700">{value.category}</h3> : ''}
                                            <TypeAnimation className="title theme-gradient"
                                        sequence={[
                                            'I build a website',
                                            1000,
                                            'I build a website for code',
                                            1000,
                                            'I build a website for design',
                                            1000,
                                            'I build a website for customization',
                                            1000
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        style={{ fontSize: '3em', fontWeight: 'bold', display: 'inline-block' }}
                                        repeat={Infinity}
                                        />
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
                                            <span className="subtitle">About Me.</span>
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
                                    <h2 className="title">DESIGN & BUILD WEBSITE</h2>
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
        {/* Start Portfolio Area 
            <div id="service" className="fix">
                <div className="service-area creative-service-wrapper pb--120 bg_color--5 d--none" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30 mb_sm--0">
                                    <span className="subtitle">Your Design Into Reality</span>
                                    <h2 className="title">VISUAL DESIGN</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12 ptb--600">
                            <Spline scene="https://prod.spline.design/zBT3BHHG3xVwid0O/scene.splinecode" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div> */}

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
