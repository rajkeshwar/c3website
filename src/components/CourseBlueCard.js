import React from 'react'
import { Link } from 'gatsby';
import { BriefcaseIcon, CalendarIcon, ExclamatinIcon, GlobeIcon } from '../icons/common';
import profileImg from '../images/srinivas-dande.png'
import Image from 'react-bootstrap/Image';
import RatingStars from './RatingStars';

const CourseBlueCard = () => {
  return ( 
    <div className="bg-gradient-to-r from-black to-blue-700">
      <div className="c3-container md:py-8 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 text-white">
          <div className="text-xs font-bold text-green-100">{`Development > Web Development > ASP.NET Core`}</div>
          <h1 className="text-2xl font-bold py-4">Build a Real-world App with ASP.NET Core and Angular 2 (4+)</h1>
          <p className="font-light flex text-gray-100 text-lg">Build a full-stack web app with ASP.NET Core, Entity Framework Core and Angular 2 (Angular 4+)</p>
          <div className="py-2"><RatingStars rating="4.5"/></div>
          <div className="font-light text-sm">Created by 
            <Link to="/about" className="btn-link text-green-100 ml-1"><span>Srinivas Dande</span></Link>
          </div>

          <div className="flex flex-col md:flex-row mt-2 -ml-1">
              <span className="flex leading-4 text-gray-300 text-sm mb-2 mr-2 md:mb-0">
                <ExclamatinIcon className="h-4 w-4"/>
                Last updated 4/2018
              </span>  
              <span className="flex leading-4 text-gray-300 text-sm mb-2 mr-2 md:mb-0">
                <GlobeIcon className="h-4 w-4"/>
                English
              </span>     
              <span className="flex leading-4 text-gray-300 text-sm mb-2 mr-2 md:mb-0">
                <CalendarIcon className="h-4 w-4"/>
                Closing on 12-02-2021
              </span>  
          </div>

        </div>
        <div className="w-full md:w-1/3">
          <div className="flex justify-center">
            <div className="inline text-center pt-8">
              <Image src={profileImg} className="object-cover rounded-full h-24 w-24" alt="Srinivas Dande" />
              <Link to="/about" className="btn-link text-green-100 ml-1"><span>Srinivas Dande</span></Link>

              <div className="flex text-sm text-gray-300 my-1 leading-4">
                <BriefcaseIcon className="inline-block h-4 w-4 pr-1"/> 79 Courses
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default CourseBlueCard;