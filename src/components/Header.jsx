import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Header = ({ onBookingClick }) => {
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
                                    <button
                                        onClick={onBookingClick}
                                        className={`
                                        bk-btn 
                                        bg-blue-600 text-white 
                                        px-4 py-2 rounded 
                                        border-0 outline-none focus:outline-none focus:ring-0 
                                        ring-4 ring-blue-400 ring-opacity-50 
                                        animate-pulse 
                                        transition
                                        `}
                                    >
                                        Booking Now
                                    </button>
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
                                        <img src="/img/Logo-ss.png" alt="Logo" />
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

                 {/* glowing keyframes */}
      <style jsx>{`
        @keyframes glowing {
          0% {
            box-shadow: 0 0 5px #ff0203;
          }
          50% {
            box-shadow: 0 0 20px #cc0102;
          }
          100% {
            box-shadow: 0 0 5px #7f0001;
          }
        }
        .glow {
          animation: glowing 2s ease-in-out infinite;
        }
      `}</style>
            </header>
        </div>
    );
};

export default Header;
