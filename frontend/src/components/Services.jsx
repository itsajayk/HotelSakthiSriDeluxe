import React from 'react';

const services = [
  {
    icon: 'flaticon-035-eight-ball',
    title: 'Prime City Location',
    description: 'Stay steps from key spots—our hotel is near the airport, railway station, bus stand, offices, and more. Ideal comfort and ease for business travelers',
  },
  {
    icon: 'flaticon-036-parking',
    title: 'In-built Car parking',
    description: 'Park with ease in our secure in-built facility. Spacious and hassle-free, it offers comfort and peace of mind with easy access throughout your stay.',
  },
  {
    icon: 'flaticon-026-bed',
    title: 'Luxury of Space',
    description: 'Enjoy comfort in our spacious AC and non-AC rooms, tailored for all budgets. Well-ventilated and peaceful, they promise a restful, pleasant stay.',
  },
  {
    icon: 'flaticon-024-towel',
    title: '24/7 Instant Hot Water',
    description: 'Refresh anytime with 24/7 hot water access—day or night. Experience the comfort and convenience you deserve, guaranteed throughout your stay.',
  },
  {
    icon: 'flaticon-033-dinner',
    title: 'In-Room Services',
    description: 'Your comfort matters. From hot meals to fresh linens, our prompt in-room service brings what you need—quickly, quietly, and with thoughtful care.',
  },
  {
    icon: 'flaticon-044-clock-1',
    title: 'Reliable Power Backup',
    description: 'Count on seamless comfort—our power backup ensures no interruptions, whether you’re relaxing, working online, or enjoying all our amenities.',
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
