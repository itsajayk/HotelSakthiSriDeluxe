import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Header = () => {
    return (
        <div>
            <header className="header-section">
                <div className="top-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="tn-left">
                                    <li><i className="fa fa-phone"></i> 0427-3510200</li>
                                    <li><i className="fa fa-envelope"></i> hotelsrisakthideluxe@gmail.com</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="tn-right">
                                    <div className="top-social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-tripadvisor"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                    </div>
                                    <Link to="/booking" className="bk-btn">Booking Now</Link>
                                    <div className="language-option">
                                        <img src="/img/flag.jpg" alt="" />
                                        <span>EN <i className="fa fa-angle-down"></i></span>
                                        <div className="flag-dropdown">
                                            <ul>
                                                <li><a href="#">Zi</a></li>
                                                <li><a href="#">Fr</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="/img/logo.png" alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="nav-menu">
                                    <nav className="mainmenu">
                                        <ul>
                                            <li className="active"><Link to="/">Home</Link></li>
                                            <li><Link to="/rooms">Rooms</Link></li>
                                            <li><Link to="/about-us">About Us</Link></li>
                                           
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                    <div className="nav-right search-switch">
                                        <i className="icon_search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
