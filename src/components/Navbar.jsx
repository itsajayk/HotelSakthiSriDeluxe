import React from 'react';
import { Link } from 'react-router-dom'; // ✅ React Router Link

const Navbar = () => {
  return (
    <div>
      <div className="offcanvas-menu-overlay"></div>
      <div className="canvas-open">
        <i className="icon_menu"></i>
      </div>
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="icon_close"></i>
        </div>
        <div className="search-icon search-switch">
          <i className="icon_search"></i>
        </div>
        <div className="header-configure-area">
          <div className="language-option">
            <img src="/img/flag.jpg" alt="flag" />
            <span>
              EN <i className="fa fa-angle-down"></i>
            </span>
            <div className="flag-dropdown">
              <ul>
                <li><a href="#">Zi</a></li>
                <li><a href="#">Fr</a></li>
              </ul>
            </div>
          </div>
          <Link to="/booking" className="bk-btn">Booking Now</Link>
        </div>

        <nav className="mainmenu mobile-menu">
          <ul>
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li>
              <Link to="#">Pages</Link>
              <ul className="dropdown">
                <li><Link to="/room-details">Room Details</Link></li>
                <li><Link to="/deluxe-room">Deluxe Room</Link></li>
                <li><Link to="/family-room">Family Room</Link></li>
                <li><Link to="/premium-room">Premium Room</Link></li>
              </ul>
            </li>
            <li><Link to="/blog">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div id="mobile-menu-wrap"></div>

        <div className="top-social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-tripadvisor"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div>

        <ul className="top-widget">
          <li><i className="fa fa-phone"></i> (12) 345 67890</li>
          <li><i className="fa fa-envelope"></i> info.colorlib@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
