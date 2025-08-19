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
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ||  'https://hotelsakthisrideluxe.onrender.com';

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

  // quick sanity checks
  try {
    if (!API_BASE_URL) throw new Error("API_BASE_URL not set (check deployed env).");
    if (window.location.protocol === "https:" && API_BASE_URL.startsWith("http:")) {
      throw new Error("Mixed content blocked: site is HTTPS but API_BASE_URL uses HTTP. Use HTTPS for API.");
    }
  } catch (preErr) {
    console.error("Pre-submit error:", preErr);
    setError(preErr.message);
    toast.error("❌ " + preErr.message);
    setSubmitting(false);
    return;
  }

  try {
    console.log("Sending EmailJS...");
    const emailRes = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { ...form },
      import.meta.env.VITE_EMAILJS_USER_ID
    );
    console.log("EmailJS response:", emailRes);

  } catch (emailErr) {
    // EmailJS may fail due to referrer/domain restrictions; don't stop — still try backend
    console.warn("EmailJS send failed (continuing to backend):", emailErr?.message || emailErr);
  }

  // call backend
  let res;
  try {
    console.log("fetch ->", `${API_BASE_URL}/api/book`, "body:", form);
    res = await fetch(`${API_BASE_URL}/api/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // mode: "cors", // default is fine; uncomment if you want to experiment
      body: JSON.stringify(form),
    });
  } catch (networkErr) {
    console.error("Network/fetch error:", networkErr);
    setError("Network error while sending booking. See console for details.");
    toast.error("❌ Network error. Check console / server reachability.");
    setSubmitting(false);
    return;
  }

  // parse response safely and surface details
  let bodyText = "";
  try {
    bodyText = await res.text();
    // try to parse JSON if possible
    try { 
      const json = JSON.parse(bodyText);
      console.log("Server JSON response:", json);
      bodyText = JSON.stringify(json);
    } catch (ignore) {
      console.log("Server text response:", bodyText);
    }
  } catch (readErr) {
    console.warn("Failed to read response body:", readErr);
  }

  if (!res.ok) {
    console.error("Server returned non-OK:", res.status, bodyText);
    setError("Failed to send booking – please try again.");
    toast.error(`❌ Booking failed: ${res.status} - ${bodyText.substring(0, 200)}`);
    setSubmitting(false);
    return;
  }

  // success
  console.log("Booking success:", res.status, bodyText);
  toast.success("✅ Booking request sent successfully!");
  setForm({ name: "", phone: "", dateIn: "", dateOut: "", guests: "1 Adult", rooms: "1 Room" });
  onCloseBooking();
  setSubmitting(false);
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
              opacity: "0.7",
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
          <div className="section-title text-center">
            <div className="hero-heading">
            <h3 className="hero-main-text">Hotel</h3>{" "}
            <h3 className="hero-sub-text">Sri Sakthi Deluxe</h3>
          </div>

            <h3 className="col-lg-8 offset-lg-2 text-white">
              Find the best hotel deals in Salem — perfect for international
              travelers & budget-friendly stays.
            </h3>
            <a href="#" className="primary-btn">
              {/* Discover Now */}
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
      <ToastContainer position="top-right" />
    </section>
  );
};

export default Hero;
