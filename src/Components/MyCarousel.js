import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './../images/image1s.jpg';
import image2 from "./../images/image2.jpg"
import image3 from './../images/image3s.jpg';

const MyCarousel = () => {
  const images = [image1,image2,image3
  ]

  return (
    <Carousel>
      {images.map((imageUrl, index) => (
        <Carousel.Item key={index} interval={1000}>
          <img
            className="d-block w-100"
            src={imageUrl}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <h3>{`Slide ${index + 1} Label`}</h3>
            <p>{`Welcome in my store`}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
