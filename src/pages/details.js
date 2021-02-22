import { Link } from 'gatsby';
import React from 'react'
import Layout from '../components/layout';
import CourseAccordion from '../components/CourseAccordion';
import WhatYouWillLearn from '../components/WhatYouWillLearn';
import CourseBlueCard from '../components/CourseBlueCard';
import CoursePriceCard from '../components/CoursePriceCard';
import CourseDescription from '../components/CourseDescription';
import { BulletLists } from '../components/CoreElements';
import StudentFeedback from '../components/StudentFeedback';

const AccordionContent = () => {
  return ( 
    <div className="w-full"> 
      <h1 className="text-2xl font-bold mt-8 mb-4">Course content</h1>

      <div className="flex justify-between mb-4">
        <span>{`10 sections • 162 lectures • 10h 35m total length`}</span>
        <button className="inline-flex items-center justify-center outline-none px-4 font-medium text-indigo-600 bg-white hover:bg-indigo-50">
          Expand all sections
        </button> 
      </div>
      <CourseAccordion />
    </div>
  );
}
 
const requirements = [
  'At least 3 months experience with ASP.NET MVC 5, Entity Framework 6 and Angular 2'
];

const CourseDetailsPage = () => {
  return ( 
    <Layout>
      <CourseBlueCard />

      <main className="c3-container md:py-8">

        <div className="flex flex-col md:flex-row flex-col-reverse">
          <div className="w-full md:w-2/3">

            <WhatYouWillLearn />

            <AccordionContent />

            <BulletLists heading="Requirements" list={requirements}/>

            <CourseDescription />

            <StudentFeedback />
            
          </div>

          <div className="w-full md:w-1/3">
            <div className="md:pl-4">
              <CoursePriceCard />
            </div>
          </div>

        </div>

      </main>
    </Layout>
   );
}
 
export default CourseDetailsPage;