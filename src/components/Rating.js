import React from 'react'
import clsx from 'clsx'
import { PropTypes } from 'prop-types'
import { HalfFadedStar, FullFadedStar } from '../icons/common';

const Rating = ({ rating, count, size }) => {
  const [ intPart, decimalPart ] = String(rating).split(/\./).map(t => Number(t));

  return ( 
    <div className="flex items-center mb-2">
      {count ? <span className="text-sm pr-2">{rating}</span> : ''}
      {Array(intPart || 0).fill(null).map((t, idx) => (
        <FullFadedStar key={idx} className={`h-${size} w-${size}`}/>
      ))}
      {Array(5 - intPart).fill(null).map((t, idx) => (
        <HalfFadedStar key={idx} className={`h-${size} w-${size}`}/>
      ))}
    </div>
  );
}
 
Rating.defaultProps =  {
  count: false,
  size: 4
}

Rating.propTypes =  {
  rating: PropTypes.string.isRequired,
  count: PropTypes.bool,
  size: PropTypes.number,
}

export default Rating;