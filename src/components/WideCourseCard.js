import React from 'react'
import Image from 'react-bootstrap/Image';
import { PropTypes } from 'prop-types';
import RatingStars from './RatingStars';

const WideCourseCard = ({ img, author, rating, price, text }) => {
  return ( 
    <div className="shadow-sm h-full flex border border-gray-100 bg-white">
      <div className="w-1/3 p-4">
        <Image src={img} alt={text} className="object-cover w-full"/>
      </div>
      <div className="p-4 flex-auto">
        <h3 className="text-xl font-bold mb-2">{text}</h3>
        <p className="font-light text-sm mb-2">{author}</p>
        <RatingStars rating={rating}/>
        <p className="font-thin text-sm mb-2">{rating}</p>
        <p className="font-bold">{price}</p>
      </div>
    </div>
  );
}
 
WideCourseCard.propTypes = {
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number,
  price: PropTypes.string,
  text: PropTypes.string,
}

export default WideCourseCard;