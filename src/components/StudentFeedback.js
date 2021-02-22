import React from 'react'
import Rating from './Rating';
import { PropTypes } from 'prop-types';
import RatingStars from './RatingStars';

const RatingProgressBar = ({ value, starCount }) => {
  return ( 
    <div className="flex align-center w-full h-6 leading-4">
      <button type="button" className="w-full mr-4">
        <span className="block relative h-2 bg-gray-200 w-full">
          <span className="absolute top-0 left-0 h-2 bg-gray-500" style={{ width: `${value}%`}}></span>
        </span>
      </button>
      <RatingStars height="h-5" rating={starCount} />
      <span className="text-blue-500 text-sm pl-4">{`${value}%`}</span>
    </div>
  );
}
RatingProgressBar.propTypes = {
  value: PropTypes.string.isRequired,
  starCount: PropTypes.number.isRequired
}

const StudentFeedback = () => {
  const ratingBars = [35, 24, 17, 20, 12];

  return ( 
    <div className="w-full">
      <h1 className="text-2xl font-bold my-4">Student feedback</h1>
      <div className="flex">
        <div className="flex flex-col mr-4">
          <div className="w-30">
            <span className="text-yellow-600 text-6xl font-bold">3.5</span>
            <span><RatingStars height="h-5" rating={3.4} /></span>
            <span className="text-yellow-700 font-semibold text-sm">Course Rating</span>
          </div>
        </div>
        <div className="flex flex-col flex-grow">

          {ratingBars.map((value, idx) => (
            <RatingProgressBar value={String(value)} starCount={5-idx} key={idx} />
          ))}

        </div>
      </div>
    </div>
  );
}
 
export default StudentFeedback;