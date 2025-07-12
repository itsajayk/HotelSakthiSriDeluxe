import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const testimonials = [
  {
    text: `I travel frequently for work, and this hotel truly stands out. The location is unbeatable,
    the staff is incredibly courteous, and the room service is prompt and professional. The
    24/7 hot water, seamless power backup, and spotless rooms made my stay absolutely
    comfortable. It felt like a home away from home!`,
    name: 'Narendran Corporate Consultant, Chennai.',
    rating: 4.5,
    logo: '/img/testimonial-logo.png', // fixed for Vite
  },
  {
    text: `We stayed here during our family vacation and were truly impressed. Spacious AC
    rooms, in-built parking, and friendly service made everything stress-free. The kids loved
    how clean and cozy everything was, and we loved the peace of mind that came with the
    reliable power backup and round-the-clock staff support. Highly recommended!`,
        name: 'ASuganthi Arumugam, Chennai.',
    rating: 4.5,
    logo: '/img/testimonial-logo.png', // fixed for Vite
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i className="icon_star" key={`star-${i}`} />);
  }

  if (halfStar) {
    stars.push(<i className="icon_star-half_alt" key="half-star" />);
  }

  return stars;
};

const Testimonial = () => {
  return (
    <section className="testimonial-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Testimonials</span>
              <h2>What Customers Say?</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <OwlCarousel
              className="testimonial-slider owl-theme"
              loop
              margin={30}
              items={1}
              autoplay
              autoplayTimeout={5000}
              smartSpeed={600}
              dots
            >
              {testimonials.map((item, index) => (
                <div className="ts-item" key={index}>
                  <p>{item.text}</p>
                  <div className="ti-author">
                    <div className="rating">{renderStars(item.rating)}</div>
                    <h5> - {item.name}</h5>
                  </div>
                  <img src={item.logo} alt="testimonial" />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
