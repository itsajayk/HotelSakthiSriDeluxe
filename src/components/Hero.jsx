import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Hero1 from "../assets/hero/hero-1.jpg";
import Hero2 from "../assets/hero/hero-2.jpg";
import Hero3 from "../assets/hero/hero-3.jpg";

const Hero = () => {
  const sliderImages = [Hero1, Hero2, Hero3];

  return (
    <section className="hero-section" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background Image Carousel */}
      <OwlCarousel
        className="hero-slider owl-theme"
        loop
        margin={0}
        items={1}
        autoplay
        autoplayTimeout={4000}
        dots={true}
        nav={false}
      >
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className="hs-item"
            style={{
              backgroundImage: `url(${img})`,
              height: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </OwlCarousel>

      {/* Overlayed Content */}
      <div
        className="container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          height: "90%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="row w-100">
          <div className="col-lg-6">
            <div className="hero-text text-white">
              <h1>Hotel Sakthi Sri Deluxe</h1>
              <p>
                Here are the best hotel booking sites, including recommendations
                for international travel and for finding low-priced hotel rooms.
              </p>
              <a href="#" className="primary-btn">
                Discover Now
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
            <div className="booking-form bg-white p-4 rounded shadow">
              <h3>Booking Your Hotel</h3>
              <form action="#">
                <div className="check-date">
                  <label htmlFor="date-in">Check In:</label>
                  <input type="text" className="date-input" id="date-in" />
                  <i className="icon_calendar"></i>
                </div>
                <div className="check-date">
                  <label htmlFor="date-out">Check Out:</label>
                  <input type="text" className="date-input" id="date-out" />
                  <i className="icon_calendar"></i>
                </div>
                <div className="select-option">
                  <label htmlFor="guest">Guests:</label>
                  <select id="guest">
                    <option value="">2 Adults</option>
                    <option value="">3 Adults</option>
                  </select>
                </div>
                <div className="select-option">
                  <label htmlFor="room">Room:</label>
                  <select id="room">
                    <option value="">1 Room</option>
                    <option value="">2 Room</option>
                  </select>
                </div>
                <button type="submit">Check Availability</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
