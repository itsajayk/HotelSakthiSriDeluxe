import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Rooms from './components/Rooms';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';

const Home = () => {

    const [showBooking, setShowBooking] = useState(false);

    
    return (
        <>
        <Header onBookingClick={() => setShowBooking(true)}/>
        <Hero showBookingForm={showBooking} onCloseBooking={() => setShowBooking(false)}/>
        <About />
        <Services />
        <Rooms />
        <Testimonial />
        <Blog />
        </>
    );
};

export default Home;
