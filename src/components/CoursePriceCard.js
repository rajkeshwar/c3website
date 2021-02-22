import Button from 'react-bootstrap/Button'
import React from 'react'
import { CourseIncludesPoints } from './CoreElements';

const courseBulletPoints = [
  { icon: 'icon-video', text: '10.5 hours on-demand video' },
  { icon: 'icon-article', text: '15 articles' },
  { icon: 'icon-downloadable-resource', text: '18 downloadable resources' },
  { icon: 'icon-lifetime', text: 'Full lifetime access' },
  { icon: 'icon-mobile', text: 'Access on mobile and TV' },
  { icon: 'icon-certificate', text: 'Certificate of completion' },
]

const CoursePriceCard = () => {
  return ( 
    <div className="shadow-lg border border-gray-300 p-4">
      <h3 className="text-2xl font-bold">₹8,640</h3>

      <Button variant="danger mt-4" block>Enroll now</Button>

      <CourseIncludesPoints points={courseBulletPoints} />

      <div className="flex justify-center my-4">
        <button className="inline-flex items-center justify-center outline-none px-4 py-2 font-medium text-indigo-600 bg-white hover:bg-indigo-50">
          Apply Coupons
        </button> 
      </div>
    </div>  
   );
}
 
export default CoursePriceCard;