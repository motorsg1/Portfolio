import React from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactOne from "../elements/contact/ContactOne";
import ServiceList from "../elements/service/ServiceList";
import { Helmet } from 'react-helmet';
import { TypeAnimation } from 'react-type-animation';
import Particles from "react-tsparticles";
import PortfolioList from "../elements/portfolio/PortfolioList";

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        buttonText: 'Let’s connect',
        buttonLink: '#contact'
    }
]

const PortfolioLanding = () => {
    let title = 'PROFESSIONAL SUMMARY'
    return (
        <div>
           <Helmet><title>bhesmark</title></Helmet>
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
             {/* Start Slider Area   */}
             <div className="slider-activation slider-creative-agency with-particles" id="home">
                    <div className="frame-layout__particles">
                        <Particles className="particle"  
                            options={{
                                style:{
                                    position: "absolute"
                                },
                                fpsLimit: 100,
                                interactivity: {
                                detectsOn: "canvas",
                                events: {
                                    onClick: {
                                    enable: true,
                                    mode: "push",
                                    },
                                    onHover: {
                                    enable: true,
                                    mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    bubble: {
                                        distance: 100,
                                        duration: 2,
                                        opacity: 0.8,
                                        size: 10,
                                        color: "#000",
                                    },
                                    push: {
                                    quantity: 4,
                                    },
                                    repulse: {
                                        distance: 100,
                                        duration: 0.4,
                                        color: "#000",
                                    },
                                },
                                },
                                particles: {
                                color: {
                                    value: "#000",
                                },
                                links: {
                                    color: "#000",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outMode: "bounce",
                                    random: false,
                                    speed: 6,
                                    straight: false,
                                   
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        value_area: 2000,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    random: true,
                                    value: 5,
                                },
                                },
                                detectRetina: true,
                            }}
                        />
                    </div>
                    <div className="im_modern_slider bg_image bg_image--27 ">
                            {SlideList.map((value , index) => (
                                <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                            <TypeAnimation className="title theme-gradient"
                                        sequence={[
                                            'Hello, I’m Bhesmark Perez, Website Developer',
                                            1000
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        style={{ fontSize: '3em', fontWeight: '900', display: 'inline-block'}}
                                        repeat={Infinity}
                                        />
                                                    {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-large" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                                        <TypeAnimation className="subtitle"
                                        sequence={[
                                            'About Me.',
                                            100
                                        ]}
                                        wrapper="span"
                                        speed={10}
                                        style={{ fontSize: '1em', fontWeight: 'bold', display: 'inline-block' }}
                                        repeat={Infinity}
                                        />
                                            <h2 className="title">{title}</h2>
                                            <TypeAnimation className="description mt_dec--20"
                                        sequence={[
                                            'Self-motivated Developer adds a high level of experience over more than seven years of collabo-rating and working on multiple web-based projects. Passionate, hardworking coder with a penchant for developing customized interfaces that factor in unique demands for accessibility, reachability, and security. Organized approach to meeting multiple, concurrent deadlines. Pulls from active knowledge of the current technology landscape to promote best practices in web development.',
                                            3000
                                        ]}
                                        wrapper="span"
                                        speed={70}
                                        style={{ fontSize: 'normal', display: 'inline-block' }}
                                        repeat={Infinity}
                                        />
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
                                <TypeAnimation className="subtitle"
                                        sequence={[
                                            'What I can do for you',
                                            100
                                        ]}
                                        wrapper="span"
                                        speed={10}
                                        style={{ fontSize: '1em', fontWeight: 'bold', display: 'inline-block' }}
                                        repeat={Infinity}
                                        />
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

             {/* Start Portfolio Area */}
             <div id="projects" className="portfolio-area ptb--120 bg_image bg_image--3">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--15">
                                    <TypeAnimation className="subtitle"
                                        sequence={[
                                            'Our complete website',
                                            100
                                        ]}
                                        wrapper="span"
                                        speed={10}
                                        style={{ fontSize: '1em', fontWeight: 'bold', display: 'inline-block' }}
                                        repeat={Infinity}
                                        />
                                        <h2 className="title">PROJECTS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}
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
