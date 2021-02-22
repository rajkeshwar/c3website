import React from 'react'
import { CheckIcon } from '../icons/common';

const highlights = [
  "Software engineering leader with 18+ years of Software Development and Training experience", 
  "Experienced in architecting and developing software applications using Full Stack Technologies.",
  "Founded Java Learning Center in 2005  and Now as CourseCube Private Limited", 
  "Trained and placed over 50,000 Students since 2005.", 
  `
    Now Handling Java Full Stack Developer Training , Spring Boot Training , Spring MicroServices Training.
    Angular Training , React JS Training , Spring Training , Hibernate Training
  `
];
const AboutAuthor = () => {
  return ( 
    <div className="w-full mb-8">
      <h1 className="text-2xl mb-4 font-bold">About Srinivas Dande :</h1>
      <ul className="list-group">
        {highlights.map((hlightText, idx) => (
          <li key={idx} className="py-1">
            <div className="flex">
              <div className="mr-4 flex items-center text-blue-500">
                <CheckIcon className="h-8 w-8"/>
              </div>
              <span>{hlightText}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default AboutAuthor;