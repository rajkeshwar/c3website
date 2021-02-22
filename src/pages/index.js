import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AccessCourses from "../components/AccessCourses";
import CourseCarousel from '../components/CourseCarousel';
import courses from '../data/courses';
import WideCourseCard from '../components/WideCourseCard';
import { Link } from 'gatsby';

const WideCourseCardList = () => {
  return ( 
    <div className="w-full">
      {courses.map((course, idx) => (
        <div className="mb-8" key={idx}>
          <Link to="/details">
            <WideCourseCard {...course} />
          </Link>
        </div>
      ))}
    </div>
  );
}
 
function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <div className="bg-gray-50">
        <main className="c3-container">
        
          <section>
            <AccessCourses />

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 my-4">Frontend Courses</h1>
            <CourseCarousel />
            
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 my-4">Backend Courses</h1>
            <CourseCarousel />

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 my-4">Framework Courses</h1>
            <WideCourseCardList />

          </section>
        </main>
      </div>
    </Layout>
  );
}

export default IndexPage;
