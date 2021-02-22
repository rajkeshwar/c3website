import React from 'react'
import { CheckIcon } from '../icons/common';

const youWillLearnList = [
  "Build real-world applications with ASP.NET Core and Angular 2",
  "Integrate ASP.NET MVC / Core with Angular 2",
  "Implement a clean and decoupled architecture",
  "Understand and apply the Dependency Inversion Principle (DIP)",
  "Properly implement the repository and unit of work patterns",
  "Use the new dependency injection feature in ASP.NET Core",
  "Troubleshoot common runtime errors",
  "Build APIs with ASP.NET Core ",
  "Test APIs using PostMan",
  "Use AutoMapper",
  "Store and retrieve data using Entity Framework Core (Code-first approach)",
  "Implement CRUD operations (including one-to-many and many-to-many relationships)",
  "Implement filtering, sorting and pagination",
  "Handle and log errors",
  "Display toast notifications",
  "Implement photo upload with progress bar ",
  "Add authentication and authorization using Auth0 and JWTs",
  "Write clean, maintainable and reliable code ",
  "Refactor bad code into good code ",
  "Better understand software development lifecycle "
];

const WhatYouWillLearn = () => {
  return ( 
    <div className="border border-gray-300 shadow-sm bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl font-bold mt-2 mb-6">{`What you'll learn`}</h1>
      <div className="">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {youWillLearnList.map((learn, idx) => (
            <li key={idx} className="py-1">
              <div className="flex">
                <div className="mr-4 flex items-center text-blue-500">
                  <CheckIcon className="h-4 w-4"/>
                </div>
                <span>{learn}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
   );
}
 
export default WhatYouWillLearn;