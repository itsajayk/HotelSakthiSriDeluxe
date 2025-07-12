import React from 'react';

const About = () => {
    return (
        <div>
        <section className="aboutus-section spad">
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <div className="about-text">
                    <div className="section-title">
                    <span>About Us</span>
                    <h2>
                        Where Comfort  <br />Meets Elegance
                    </h2>
                    </div>
                    <p className="f-para">
                    Welcome to Hotel Sri Sakthi Deluxe, your trusted choice for quality stays. We’re committed to comfort and hospitality. 
                    Each day, we welcome guests from all walks of life across a wide range of rooms and services.
                    </p>
                    <p className="s-para">
                    Whether you seek a suite, deluxe room, or family space, our hotel delivers convenience, warmth, and value in the heart of 
                    the city—making your trip truly enjoyable.
                    </p>
                    <a href="#" className="primary-btn about-btn">
                    Read More
                    </a>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="about-pic">
                    <div className="row">
                    <div className="col-sm-6">
                        <img src="img/about/hero-6.jpeg" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <img src="img/about/about-2.jpg" alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
};

export default About;
