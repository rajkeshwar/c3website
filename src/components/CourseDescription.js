import React, { useState } from 'react'
import { ArrowUp } from '../icons/common'
import { BulletLists, ShowMoreLink } from './CoreElements';
import clsx from 'clsx'

const theCourseIsFor = [
  "Developers who are familiar with ASP.NET MVC 5 and want to transition to ASP.NET Core", 
  "Developers who want to learn how to integrate ASP.NET MVC / Core and Angular 2", 
  "Developers who want to learn how to build an application from A to Z ", 
  "Developers who want to improve their coding skills"
];

const CourseDescription = () => {
  const [ expanded, setExpanded ] = useState(false);

  return ( 
    <div className="w-full mt-4">
      <h2 className="text-2xl font-bold my-2">Description</h2>
      <div className="text-sm text-gray-700 leading-8">

        <div style={{ maxHeight: '221px' }} className={clsx('show-more-content', { 
          expanded, collapsed: !expanded
         })}>

          <div dangerouslySetInnerHTML={createMarkup()} />
          <BulletLists heading="Who this course is for:" list={theCourseIsFor}/>
          
        </div>
          
        
      </div>
      
      <ShowMoreLink expanded={expanded} onToggle={setExpanded} />

    </div>
  );
}
 
export default CourseDescription;

function createMarkup() {
  return {
    __html: `
      <div>
        <p><br /></p>
        <p>In this course, you will learn of the fundamentals of how to make <strong>Angular5 and Angular6</strong> library.</p>
        <p>You will learn how to make a <strong>chart library</strong> in <strong>Angular6</strong></p>
        <p>You will learn how to make a <strong>service library</strong> using <strong>HttpClient</strong> in <strong>Angular6</strong></p>
        <p>You will learn how to <strong>publish</strong> your own library by <strong>npm</strong>.</p>
        <p>You will learn how to install <strong>Angular5 and Angular6</strong>.</p>
        <p>You will learn how to sign up for <strong>GitHub</strong>.</p>
        <p>You will learn how to use <strong>Visual Studio Code</strong> and its extensions.</p>
        <p>You will be familiar with <strong>npm</strong> command.</p>
        <p>You will learn how to use <strong>ng-packagr</strong>.</p>
        <p>You will learn how to install <strong>Angular Material</strong> in <strong>Angular6</strong>.</p>
        <p>You will learn how to make and test <strong>Pipe library</strong>.</p>
        <p>You will learn how to make and test <strong>Directive library</strong>.</p>
        <p>You will learn how to make <strong>Component library</strong>.</p>
        <p>You will learn how to make <strong>Bootstrap4 Component library</strong>.</p>
        <p>You will learn how to <strong>send data</strong> to your own component and <strong>get data</strong> from it.</p>
        <p>You will learn how to make <strong>local package</strong>&nbsp;by npm.</p>
        <p>You will become familiar with <strong>markdown</strong> syntax.</p>
        <p>You will learn how to <strong>print </strong>out mark down files.</p>
        <p>By the end of the course, you will have built a <strong>Bootstrap4 Navigation Header</strong> component with logo brand. pulldown button and search box.</p>
    </div>
    `
  }
}