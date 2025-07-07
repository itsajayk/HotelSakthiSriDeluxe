import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const AboutUs = () => {
  return (
    <>
    <Header/>
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
                  <h2>Welcome To Hotel Sakthi Sri Deluxe.</h2>
                  <p>
                    Built in 1910 during the Belle Epoque period, this hotel is located in the center of
                    Paris, with easy access to the city’s tourist attractions. It offers tastefully
                    decorated rooms.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <ul className="ap-services">
                  <li><i className="icon_check"></i> 20% Off On Accommodation.</li>
                  <li><i className="icon_check"></i> Complimentary Daily Breakfast</li>
                  <li><i className="icon_check"></i> 3 Pcs Laundry Per Day</li>
                  <li><i className="icon_check"></i> Free Wifi.</li>
                  <li><i className="icon_check"></i> Discount 20% On F&B</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Thumbnails */}
          <div className="about-page-services">
            <div className="row">
              {["about-p1.jpg", "about-p2.jpg", "about-p3.jpg"].map((img, idx) => (
                <div className="col-md-4" key={idx}>
                  <div
                    className="ap-service-item"
                    style={{
                      backgroundImage: `url(/img/about/${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="api-text">
                      <h3>
                        {["Restaurants Services", "Travel & Camping", "Event & Party"][idx]}
                      </h3>
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
          backgroundImage: "url(/img/video-bg.jpg)",
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
                  <img src="/img/play.png" alt="Play" />
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
                  backgroundImage: "url(/img/gallery/gallery-1.jpg)",
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
                      backgroundImage: "url(/img/gallery/gallery-3.jpg)",
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
                      backgroundImage: "url(/img/gallery/gallery-4.jpg)",
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
                  backgroundImage: "url(/img/gallery/gallery-2.jpg)",
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
