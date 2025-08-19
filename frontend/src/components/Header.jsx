import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/public/css/slicknav.min.css';

const Header = ({ onBookingClick }) => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => setOffcanvasOpen(prev => !prev);
  const closeOffcanvas = () => setOffcanvasOpen(false);

  return (
    <>
      {/* Offcanvas Menu Section Begin */}
      <div
        className={`offcanvas-menu-overlay ${offcanvasOpen ? 'active' : ''}`}
        onClick={closeOffcanvas}
      ></div>
      <div className="canvas-open" onClick={toggleOffcanvas}>
        <i className="icon_menu"></i>
      </div>
      <div
        className={`offcanvas-menu-wrapper ${offcanvasOpen ? 'show-offcanvas-menu-wrapper' : ''}`}
      >
        <div className="canvas-close" onClick={closeOffcanvas}>
          <i className="icon_close"></i>
        </div>
        <div className="search-icon search-switch">
          {/* <i className="icon_search"></i> */}
        </div>
        <div className="header-configure-area">
          
          <button onClick={onBookingClick} className="bk-btn">
            Book Now
          </button>
        </div>
        <nav className="mainmenu mobile-menu">
          <ul>
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="top-social">
          {/* <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-tripadvisor"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a> */}
        </div>
        <ul className="top-widget">
          <li><i className="fa fa-phone"></i> +91 63844 23456</li>
          <li><i className="fa fa-envelope"></i> hotelsrisakthideluxe@gmail.com</li>
        </ul>
      </div>
      {/* Offcanvas Menu Section End */}

      {/* Header Section Begin */}
      <header className="header-section">
        <div className="top-nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="tn-left">
                  <li><i className="fa fa-phone"></i> +91 63844 23456</li>
                  <li><i className="fa fa-envelope"></i> hotelsrisakthideluxe@gmail.com</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="tn-right">
                  <div className="top-social">
                    {/* <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-tripadvisor"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a> */}
                  </div>
                  <button
                    onClick={onBookingClick}
                    className="bk-btn bg-blue-600 text-white px-4 py-2 rounded border-0 outline-none focus:ring-0 animate-pulse transition"
                  >
                    Book Now
                  </button>
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
                  <div className="nav-right search-switch"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* glowing keyframes */}
        {/* glowing keyframes */}
                <style>
                {`
                    @keyframes glowing {
                    0% { box-shadow: 0 0 5px #ff0203; }
                    50% { box-shadow: 0 0 20px #cc0102; }
                    100% { box-shadow: 0 0 5px #7f0001; }
                    }
                    .glow { animation: glowing 2s ease-in-out infinite; }
                `}
                </style>

      </header>
      {/* Header Section End */}
    </>
  );
};

export default Header;
