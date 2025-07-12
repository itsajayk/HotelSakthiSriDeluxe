import React from "react";
import Footer from "./Footer";
import Header from "./Header";

// Image Imports
import aboutP1 from "/img/about/about-p1.jpg";
import aboutP2 from "/img/about/about-p2.jpg";
import aboutP3 from "/img/about/about-p3.jpg";
import videoBg from "/img/video-bg.jpg";
import playImg from "/img/play.png";
import gallery1 from "/img/gallery/gallery-1.jpg";
import gallery2 from "/img/gallery/gallery-2.jpg";
import gallery3 from "/img/gallery/gallery-3.jpg";
import gallery4 from "/img/gallery/gallery-4.jpg";

const AboutUs = () => {
  const aboutImages = [aboutP1, aboutP2, aboutP3];
  const aboutTitles = ["Restaurants Services", "Travel & Camping", "Event & Party"];

  return (
    <>
      <Header />

      {/* Breadcrumb Section */}
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>About Us</h2>
                <div className="bt-option">
                  <a href="/">Home</a>
                  <span>About Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Page Section */}
      <section className="aboutus-page-section spad">
        <div className="container">
          <div className="about-page-text">
            <div className="row">
              <div className="col-lg-6">
                <div className="ap-title">
                  <h2>Welcome To Hotel Sri Sakthi Deluxe.</h2>
                  <p>
                    Welcome to Hotel Sri Sakthi Deluxe, where comfort, elegance, and exceptional service
                    come together to create a truly memorable stay. Whether you're traveling for business
                    or leisure, we offer a perfect blend of modern amenities with warm hospitality. Located
                    in the heart of the city, our hotel is your ideal destination for relaxation, convenience,
                    and personalized experiences.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <ul className="ap-services">
                  <li><i className="icon_check"></i> 24 Hrs Check-In & Check-out</li>
                  <li><i className="icon_check"></i> 24 Hrs Hot & Cold Water</li>
                  <li><i className="icon_check"></i> Spacious Car Parking</li>
                  <li><i className="icon_check"></i> Free Wifi.</li>
                  <li><i className="icon_check"></i> Efficient Laundry Service</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Thumbnails */}
          <div className="about-page-services">
            <div className="row">
              {aboutImages.map((img, idx) => (
                <div className="col-md-4" key={idx}>
                  <div
                    className="ap-service-item"
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="api-text">
                      <h3>{aboutTitles[idx]}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section
        className="video-section"
        style={{
          backgroundImage: `url(${videoBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="video-text">
                <h2>Discover Our Hotel & Services.</h2>
                <p>It’s Hurricane Season But We Are Visiting Hilton Head Island</p>
                <a
                  href="https://www.youtube.com/watch?v=EzKkl64rRbM"
                  className="play-btn video-popup"
                >
                  <img src={playImg} alt="Play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Our Gallery</span>
                <h2>Discover Our Work</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6">
              <div
                className="gallery-item"
                style={{
                  backgroundImage: `url(${gallery1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="gi-text">
                  <h3>Room Luxury</h3>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div
                    className="gallery-item"
                    style={{
                      backgroundImage: `url(${gallery3})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="gi-text">
                      <h3>Room Luxury</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="gallery-item"
                    style={{
                      backgroundImage: `url(${gallery4})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="gi-text">
                      <h3>Room Luxury</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div
                className="gallery-item large-item"
                style={{
                  backgroundImage: `url(${gallery2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="gi-text">
                  <h3>Room Luxury</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default AboutUs;
