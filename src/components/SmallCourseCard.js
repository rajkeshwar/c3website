import React from 'react'
import Image from 'react-bootstrap/Image';
import { PropTypes } from 'prop-types';
import RatingStars from './RatingStars';

const SmallCourseCard = ({ img, author, rating, price, text }) => {
  return ( 
    <div className="shadow-lg h-full border border-gray-100">
      <Image src={img} alt={text} className="w-full object-cover"/>
      <div className="p-4">
        <h3 className="font-lg font-bold mb-2">{text}</h3>
        <p className="font-light text-sm mb-2">{author}</p>
        <RatingStars rating={rating}/>
        <p className="font-thin text-sm mb-2">{rating}</p>
        <p className="font-bold">{price}</p>
      </div>
    </div>
  );
}
 
SmallCourseCard.propTypes = {
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number,
  price: PropTypes.string,
  text: PropTypes.string,
}

export default SmallCourseCard;