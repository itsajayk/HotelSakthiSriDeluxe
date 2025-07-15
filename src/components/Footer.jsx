import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '/public/css/style.css'; // include styles for modal and animation

const PrivacyModal = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal open
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
            opacity: 0,
            scale: 0.4,
            rotate: 45,
            filter: "blur(6px)",
            x: 150,
            y: -100,
            transition: {
              duration: 0.7,
              ease: "easeInOut"
            }
          }}


            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>&times;</button>
            <h2>Privacy Policy</h2>
            <p>We value your privacy and are committed to protecting your personal information.</p>
            <p>All guest details are securely stored and used only for reservation and service purposes.</p>
            <p>It’s highly recommended to provide a Government proof at the time of Check-In.</p>
            <p>Security measures are in place to safeguard your information at all times.</p>
            <p>Surveillance in public areas is for safety and security only.</p>
            <p>Room access and in-room data are treated with the highest confidentiality.</p>
            <p>By staying with us, you agree to our policy to ensure a secure and respectful experience.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleOpen = e => {
    e.preventDefault();
    setShowPrivacy(true);
  };

  const handleClose = () => setShowPrivacy(false);

  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-text">
            <div className="row">
              <div className="col-lg-4">
                <div className="ft-about">
                  <div className="logo">
                    <a href="#">
                      <img src="img/footer-logo1.png" alt="footer logo" />
                    </a>
                  </div>
                  <p>In the Heart of the City<br /> Close to Everything</p>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-5">
                <div className="ft-contact">
                  <h6>Contact Us</h6>
                  <ul>
                    <li>0427-3510200</li>
                    <li>hotelsrisakthideluxe@gmail.com</li>
                    <li>90, 91, 92, Behind New Bus Stand, Chinnery Vayal Kadu, Pallappatti, Salem - 636 009</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-option">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <ul>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="#" onClick={handleOpen}>Privacy Policy</a></li>
                </ul>
              </div>
              <div className="col-lg-5">
                <div className="co-text">
                  <p>© {currentYear} All rights reserved | This site is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://TekCrewz.com" target="_blank" rel="noreferrer">TekCrewz</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal isOpen={showPrivacy} onClose={handleClose} />
    </>
  );
};

export default Footer;
