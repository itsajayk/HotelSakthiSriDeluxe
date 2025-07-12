import React from 'react';
import Header from './Header';

const Contact = () => {
  return (
    <>
    <Header/>
      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div className="col-lg-4">
              <div className="contact-text">
                <h2>Contact Info</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>
                <table>
                  <tbody>
                    <tr>
                      <td className="c-o">Address:</td>
                      <td>856 Cordia Extension Apt. 356, Lake, US</td>
                    </tr>
                    <tr>
                      <td className="c-o">Phone:</td>
                      <td>(12) 345 67890</td>
                    </tr>
                    <tr>
                      <td className="c-o">Email:</td>
                      <td>info.colorlib@gmail.com</td>
                    </tr>
                    <tr>
                      <td className="c-o">Fax:</td>
                      <td>+(12) 345 67890</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7 offset-lg-1">
              <form action="#" className="contact-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" placeholder="Your Email" />
                  </div>
                  <div className="col-lg-12">
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Submit Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="map mt-5">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.4085903344885!2d78.13670549999999!3d11.6654284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1c9311fb51d%3A0x42d1be7f4aa5e72b!2sHotel%20Sri%20Sakthi%20Deluxe!5e0!3m2!1sen!2sin!4v1752319262220!5m2!1sen!2sin"
              height="470"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
