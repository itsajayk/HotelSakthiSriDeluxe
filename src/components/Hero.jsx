import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Hero1 from "../assets/hero/hero-4.jpeg";
import Hero2 from "../assets/hero/hero-5.jpeg";
// import Hero3 from "../assets/hero/hero-6.jpeg";

const Hero = ({ showBookingForm, onCloseBooking }) => {
  const sliderImages = [Hero1, Hero2];

  return (
    <section
      className="hero-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
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
          justifyContent: "center"
        }}
      >
        <div className="hero">

        <div className="section-title">
          <div className="">
            <div className="hero-text text-white">
              <h1 id="hero-main-text">Hotel Sakthi Sri Deluxe</h1>
              <h3 className="col-lg-8 offset-lg-2">
                Find the best hotel deals in Salem — perfect for international
                travelers and budget-friendly stays.
              </h3>
              <a href="#" className="primary-btn">
                Discover Now
              </a>
            </div>
          </div>
          
        </div>
        

          {showBookingForm && (
            <div className="col-xl-4 col-lg-5 w-full lg:w-5/12 xl:ml-auto lg:ml-8 mt-8 lg:mt-0 relative">
              <div
                className={`
                  booking-form bg-white p-6 rounded-2xl shadow-lg
                  transform transition-all duration-500
                  opacity-100 scale-100
                `}
                style={{
                  /* initial hidden state before mount for animation */
                  animation: "zoomFadeIn 0.5s ease-out forwards",
                }}
              >
                {/* Close button */}
                <button
                  onClick={onCloseBooking}
                  className="absolute top-5 right-1 text-gray-500 hover:text-gray-800 text-xl leading-none border-0 outline-none focus:outline-none focus:ring-0"
                  aria-label="Close booking form"
                >
                  &times;
                </button>

                <h3 className="text-2xl font-semibold mb-4">Book Your Hotel</h3>
                <form action="#">
                  <div className="check-date mb-4 relative">
                    <label htmlFor="date-in" className="block mb-1">
                      Check In:
                    </label>
                    <input
                      type="text"
                      id="date-in"
                      className="date-input w-full border px-3 py-2 rounded"
                      placeholder="Select date"
                    />
                    <i className="icon_calendar absolute right-3 top-[2.4rem]"></i>
                  </div>
                  <div className="check-date mb-4 relative">
                    <label htmlFor="date-out" className="block mb-1">
                      Check Out:
                    </label>
                    <input
                      type="text"
                      id="date-out"
                      className="date-input w-full border px-3 py-2 rounded"
                      placeholder="Select date"
                    />
                    <i className="icon_calendar absolute right-3 top-[2.4rem]"></i>
                  </div>
                  <div className="select-option mb-4">
                    <label htmlFor="guest" className="block mb-1">
                      Guests:
                    </label>
                    <select
                      id="guest"
                      className="w-full border px-3 py-2 rounded"
                    >
                      <option>2 Adults</option>
                      <option>3 Adults</option>
                      <option>4 Adults</option>
                    </select>
                  </div>
                  <div className="select-option mb-6">
                    <label htmlFor="room" className="block mb-1">
                      Room:
                    </label>
                    <select
                      id="room"
                      className="w-full border px-3 py-2 rounded"
                    >
                      <option>1 Room</option>
                      <option>2 Rooms</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full primary-btn text-center py-2 rounded hover:bg-blue-700 transition"
                  >
                    Check Availability
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes zoomFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
