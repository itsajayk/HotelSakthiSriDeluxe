import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Room = () => {
    return (
        <>
        <Header/>
            <div className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <h2>Our Rooms</h2>
                                <div className="bt-option">
                                    <a href="/">Home</a>
                                    <span>Rooms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="rooms-section spad">
                <div className="container">
                    <div className="row">
                        {[
                            // { title: "Premium King Room", src: "/img/room/room-1.jpg", capacity: 3 },
                            { title: "Deluxe Room A/c", src: "/img/room/room-2.jpg", capacity: 5 },
                            { title: "Deluxe Room Non A/c", src: "/img/room/room-3.jpg", capacity: 2 },
                            // { title: "Luxury Room", src: "/img/room/room-4.jpg", capacity: 1 },
                            // { title: "Room With View", src: "/img/room/room-5.jpg", capacity: 1 },
                            // { title: "Small View", src: "/img/room/room-6.jpg", capacity: 2 },
                        ].map((room, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="room-item">
                                    <img src={room.src} alt={room.title} />
                                    <div className="ri-text">
                                        <h4>{room.title}</h4>
                                        <h3>159$<span>/Pernight</span></h3>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="r-o">Size:</td>
                                                    <td>30 ft</td>
                                                </tr>
                                                <tr>
                                                    <td className="r-o">Capacity:</td>
                                                    <td>Max person {room.capacity}</td>
                                                </tr>
                                                <tr>
                                                    <td className="r-o">Bed:</td>
                                                    <td>King Beds</td>
                                                </tr>
                                                <tr>
                                                    <td className="r-o">Services:</td>
                                                    <td>Wifi, Television, Bathroom,...</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a href="#" className="primary-btn">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-12">
                            <div className="room-pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">Next <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Room;
