import React, { Component } from "react";
const Portfolio_image = <img src="/assets/images/portfolio/portfolio-4.jpg" alt="Project" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/portfolio-5.jpg" alt="Project" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/portfolio-6.jpg" alt="Project" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/portfolio-7.jpg" alt="Project" />;
const Portfolio_image5 = <img src="/assets/images/portfolio/portfolio-8.jpg" alt="Project" />;

const PortfolioListContent = [
    {
        image: Portfolio_image,
        category: 'Automotive',
        title: 'BAIC',
    },
    {
        image: Portfolio_image2,
        category: 'Automotive',
        title: 'MAXUS',
    },
    {
        image: Portfolio_image3,
        category: 'Automotive',
        title: 'AUTOMOTIVE BABGI',
    },
    {
        image: Portfolio_image4,
        category: 'Coffee Shop',
        title: 'MOROCCAN TASTE',
    },
    {
        image: Portfolio_image5,
        category: 'Farms',
        title: 'BABGI FARMS',
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`im_portfolio ${styevariation}`}>
                            <div className="thumbnail_inner">
                                <div className="thumbnail">
                                        {value.image}   
                                </div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <div className="portfolio_heading">
                                        <div className="category_list">
                                            {value.category}
                                        </div>
                                        <h4 className="title">{value.title}</h4>
                                    </div>
                                    <div className="portfolio_hover">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;