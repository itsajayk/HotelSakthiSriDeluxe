import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const testimonials = [
  {
    text: `After a construction project took longer than expected, my husband, my daughter and I
    needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
    city, neighborhood and the types of housing options available and absolutely love our
    vacation at Hotel Sakthi Sri Deluxe.`,
    name: 'Alexander Vasquez',
    rating: 4.5,
    logo: '/img/testimonial-logo.png', // fixed for Vite
  },
  {
    text: `After a construction project took longer than expected, my husband, my daughter and I
    needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
    city, neighborhood and the types of housing options available and absolutely love our
    vacation at Hotel Sakthi Sri Deluxe.`,
    name: 'Alexander Vasquez',
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
