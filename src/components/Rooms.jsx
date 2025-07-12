import React from 'react';

const Rooms = () => {
  const rooms = [
    {
      name: 'Double Room',
      price: 199,
      img: 'img/room/room-b1.jpg',
    },
    {
      name: 'Deluxe A/c',
      price: 1800,
      img: 'img/room/room-b2.jpg',
    },
    {
      name: 'Deluxe Non A/c',
      price: 1100,
      img: 'img/room/room-b3.jpg',
    },
    {
      name: 'Family Room',
      price: 299,
      img: 'img/room/room-b4.jpg',
    },
  ];

  return (
    <section className="hp-room-section">
      <div className="container-fluid">
        <div className="hp-room-items">
          <div className="row">
            {rooms.map((room, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className="hp-room-item set-bg"
                  style={{ backgroundImage: `url(${room.img})` }}
                >
                  <div className="hr-text">
                    <h3>{room.name}</h3>
                    <h2>
                      ₹{room.price}
                      <span>/Per night</span>
                    </h2>
                    <table>
                      <tbody>
                        <tr>
                          <td className="r-o">Size:</td>
                          <td>30 ft</td>
                        </tr>
                        <tr>
                          <td className="r-o">Capacity:</td>
                          <td>Max persons 5</td>
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
                    <a href="#" className="primary-btn">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
