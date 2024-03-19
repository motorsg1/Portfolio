import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProgressBar } from 'react-bootstrap';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Skills",
        tab3 = "Experience",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                {/*tab2 = "Awards",*/}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div className={`rn-progress-bar progress-bar--1 mt_dec--10`}>
                                                <div className="single-progress">
                                                    <h6 className="title">Web Development</h6>
                                                    <ProgressBar now={95} />
                                                    <span className="label">90%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">System Integration</h6>
                                                    <ProgressBar now={80} />
                                                    <span className="label">80%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Photography & Videograpy</h6>
                                                    <ProgressBar now={75} />
                                                    <span className="label">75%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Graphic Design</h6>
                                                    <ProgressBar now={75} />
                                                    <span className="label">75%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/">Web Developer<span><br /> - Motors Gate Company | بوابة العربات · Full-time</span></a> Sep 2021 - Current.
                                               </li>
                                               <li>
                                                   <a href="/">Junior Web Developer<span><br /> - Distribution & Marketing Company Ltd</span></a> Sep 2016 - Sep 2021 · 5yr.
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/">Panpacific University North Philippines<span> <br />- Associate in Computer Technology</span></a> 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;