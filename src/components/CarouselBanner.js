import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import PropTypes from 'prop-types';

const carouselImages = [
  'https://coursecube.com/jlc/1.1/images/DevOps-Final.png', 
  'https://coursecube.com/jlc/1.1/images/BMS-Final.png', 
  'https://coursecube.com/jlc/1.1/images/Angular-Final.png',
  'https://coursecube.com/jlc/1.1/images/React-Final.png'
];

const CarouselBanner = ({ images }) => {

  return (
    <Carousel>
      {carouselImages.map((image, idx) => (
        <Carousel.Item key={idx}>
          <Image
            className="d-block w-full"
            src={image}
            alt={image}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

CarouselBanner.propTypes = {
  images: PropTypes.array,
};

export default CarouselBanner;