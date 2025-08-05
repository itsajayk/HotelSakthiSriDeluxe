import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Slide } from 'react-toastify';
import Hero1 from "../assets/hero/hero-4.jpeg";
import Hero2 from "../assets/hero/hero-5.jpeg";
import emailjs from "emailjs-com";

/**
 * Hero component with image slider and booking form overlay.
 * Props:
 *  - showBookingForm: boolean
 *  - onCloseBooking: function
 */
const Hero = ({ showBookingForm, onCloseBooking }) => {
  const sliderImages = [Hero1, Hero2];
  const API_PORT = import.meta.env.VITE_API_PORT || 3001;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    dateIn: "",
    dateOut: "",
    guests: "1 Adult",
    rooms: "1 Room",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseBooking = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onCloseBooking();
    }, 500); // match animation duration
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      // Send email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...form },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      // Trigger SMS via backend
      const res = await fetch(
        `http://localhost:${API_PORT}/api/book`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (!res.ok) throw new Error(await res.text());

      // Custom success toast
      toast.success(
        "\u2705 Booking request sent successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
        style: {
          background: 'linear-gradient(135deg, #6EE7B7 0%, #3B82F6 100%)',
          color: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          fontWeight: '500',
          fontSize: '1rem'
        }
      });

      setForm({ name: "", phone: "", dateIn: "", dateOut: "", guests: "1 Adult", rooms: "1 Room" });
      onCloseBooking();
    } catch (err) {
      console.error(err);
      setError("Failed to send booking – please try again.");
      toast.error("❌ Failed to send booking. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className="hero-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <OwlCarousel
        loop
        margin={0}
        items={1}
        autoplay
        autoplayTimeout={4000}
        dots
        nav={false}
        className="owl-theme hero-slider"
      >
        {sliderImages.map((img, i) => (
          <div
            key={i}
            className="hs-item"
            style={{
              backgroundImage: `url(${img})`,
              height: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </OwlCarousel>

      <div
        className="container"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          height: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="hero">
          <div className="section-title text-center text-white">
            <h1 id="hero-main-text">Hotel Sri Sakthi Deluxe</h1>
            <h3 className="col-lg-8 offset-lg-2">
              Find the best hotel deals in Salem — perfect for international
              travelers & budget-friendly stays.
            </h3>
            <a href="#" className="primary-btn">
              Discover Now
            </a>
          </div>

          {showBookingForm && (
            <div className="booking-overlay">
              <div
                className="booking-form bg-white p-6 rounded-2xl shadow-lg"
                style={{
                  animation: `${isClosing ? 'zoomFadeOut 0.5s ease-in' : 'zoomFadeIn 0.5s ease-out'} forwards`
                }}
              >
                <button
                  onClick={handleCloseBooking}
                  className="close-btn absolute top-5 right-1 text-gray-500 hover:text-gray-800 text-xl"
                  aria-label="Close booking form"
                >
                  &times;
                </button>
                <h3 className="text-2xl font-semibold mb-1">Book Your Hotel</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-0">
                    <label htmlFor="name">Full Name:</label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={onChange}
                      className="w-full border px-3 py-2 rounded"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="mb-0">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      name="phone"
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={onChange}
                      className="w-full border px-3 py-2 rounded"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div className="mb-0">
                    <label htmlFor="dateIn">Check In:</label>
                    <input
                      name="dateIn"
                      id="dateIn"
                      type="date"
                      value={form.dateIn}
                      onChange={onChange}
                      className="w-full border px-3 py-2 rounded"
                      required
                    />
                  </div>
                  <div className="mb-0">
                    <label htmlFor="dateOut">Check Out:</label>
                    <input
                      name="dateOut"
                      id="dateOut"
                      type="date"
                      value={form.dateOut}
                      onChange={onChange}
                      className="w-full border px-3 py-2 rounded"
                      required
                    />
                  </div>
                  <div className="mb-0">
                    <label htmlFor="guests">Guests:</label>
                    <select
                      name="guests"
                      id="guests"
                      value={form.guests}
                      onChange={onChange}
                      className="w-full border px-3 py-2 rounded"
                    >
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>3 Adults</option>
                      <option>4 Adults</option>
                    </select>
                  </div>
                  <div className="mb-0">
                    <label htmlFor="rooms">Room:</label>
                    <select
                      name="rooms"
                      id="rooms"
                      value={form.rooms}
                      onChange={onChange}
                      className="w-full border px-3 py-2 rounded"
                    >
                      <option>1 Room</option>
                      <option>2 Rooms</option>
                    </select>
                  </div>
                  {error && <p className="text-red-600 mb-0">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full primary-btn py-2 rounded hover:bg-blue-700 transition"
                  >
                    {submitting ? "Sending…" : "Check Availability"}
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
        @keyframes zoomFadeOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }

        .close-btn {
          background: transparent;
          border: none;
        }
      `}</style>

      {/* Toast container for success/error messages */}
      <ToastContainer />
    </section>
  );
};

export default Hero;
