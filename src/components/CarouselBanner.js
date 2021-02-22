import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import PropTypes from 'prop-types';

const carouselImages = [
  'https://coursecube.com/jlc/1.0/images/CC-Java-Img-Final.png', 
  'https://coursecube.com/jlc/1.0/images/CC-MS-Img-Final.png', 
  'https://coursecube.com/jlc/1.0/images/CC-Angular-Img-Final.png', 
  'https://coursecube.com/jlc/1.0/images/CC-React-Img-Final.png'
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