import { Link } from 'gatsby';
import React from 'react'
import Carousel from 'react-multi-carousel';
import SmallCourseCard from './SmallCourseCard';
import courses from '../data/courses';

// https://www.npmjs.com/package/react-multi-carousel

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const CourseCarousel = () => {
  return ( 
    <Carousel 
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={false}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      {courses.map((course, idx) => (
        <div className="p-2 pb-4 h-full" key={idx}>
          <Link to="/details">
            <SmallCourseCard {...course}/>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
 
export default CourseCarousel;