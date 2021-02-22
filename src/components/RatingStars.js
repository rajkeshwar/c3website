import React from 'react'
import { PropTypes } from 'prop-types';
import clsx from 'clsx'

const RatingStars = ({ height, rating }) => {
  const width = `${(rating / 5) * 100}%`;
  const randomId = `star-rating-mask-${String(Math.random()).slice(4)}`;

  return ( 
    <div className={clsx('h-5 w-24', height)}>
      <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 70 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id={randomId} data-purpose="star-rating-mask">
          <rect x={0} y={0} width={width} height="100%" fill="white" />
        </mask>
        <g fill="#eb8a2f" mask={`url(#${randomId})`}>
          <use xlinkHref="#icon-rating-star" width={14} height={14} x={0} />
          <use xlinkHref="#icon-rating-star" width={14} height={14} x={14} />
          <use xlinkHref="#icon-rating-star" width={14} height={14} x={28} />
          <use xlinkHref="#icon-rating-star" width={14} height={14} x={42} />
          <use xlinkHref="#icon-rating-star" width={14} height={14} x={56} />
        </g>
        <g fill="transparent" stroke="#eb8a2f" strokeWidth={2}>
          <use xlinkHref="#icon-rating-star" width={12} height={12} x={1} y={1} />
          <use xlinkHref="#icon-rating-star" width={12} height={12} x={15} y={1} />
          <use xlinkHref="#icon-rating-star" width={12} height={12} x={29} y={1} />
          <use xlinkHref="#icon-rating-star" width={12} height={12} x={43} y={1} />
          <use xlinkHref="#icon-rating-star" width={12} height={12} x={57} y={1} />
        </g>
      </svg>
    </div>
  );
}
 
RatingStars.propTypes = {
  height: PropTypes.string,
  rating: PropTypes.number
}

export default RatingStars;