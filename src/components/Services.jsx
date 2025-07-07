import React from 'react';

const services = [
  {
    icon: 'flaticon-036-parking',
    title: 'Travel Plan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    icon: 'flaticon-033-dinner',
    title: 'Catering Service',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    icon: 'flaticon-026-bed',
    title: 'Babysitting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    icon: 'flaticon-024-towel',
    title: 'Laundry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    icon: 'flaticon-044-clock-1',
    title: 'Hire Driver',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    icon: 'flaticon-012-cocktail',
    title: 'Bar & Drink',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
];

const Services = () => {
  return (
    <div>
      <section className="services-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>What We Do</span>
                <h2>Discover Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="service-item">
                  <i className={service.icon}></i>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
