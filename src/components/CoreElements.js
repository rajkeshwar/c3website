import React from 'react'
import { ArrowUp } from '../icons/common';
import clsx from 'clsx'

/* eslint-disable react/prop-types */

export const BulletLists = ({ heading, list }) => {
  return ( 
    <div className="mt-8">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <ul className="w-full mt-4">
        {list.map((eachBulletPoint, idx) => (
          <li className="w-full" key={idx}>
            <div className="flex text-sm px-2 py-1 text-gray-500">
              <svg aria-hidden="true" focusable="false" fill="currentColor" className="h-4 w-4 mr-2">
                <use xlinkHref="#icon-bullet"/>
              </svg>
              <div className="leading-4">{eachBulletPoint}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
   );
}

export const ShowMoreLink = ({ expanded, onToggle }) => {
  return (
    <button type="button" className="mt-4" onClick={_ => onToggle(!expanded)}>
      <span className="flex text-blue-500 border border-blue-500 py-1">
        <span className="text-sm leading-4 px-2 font-semibold">
          { expanded ? `Show less` : `Show more`}
        </span>
        <span className="flex align-center">
          <ArrowUp className={clsx('h-4 w-4 transform origin-center transition ease-in-out', { 'rotate-180': !expanded })}/>
        </span>
      </span>
    </button>
  )
}

export const CourseIncludesPoints = ({ points }) => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-bold mt-4">This course includes:</h2>
      <ul className="w-full">
        {points.map(({ icon, text }, idx) => (
          <li className="w-full" key={idx}>
            <div className="flex align-center text-gray-500 p-2">
              <svg aria-hidden="true" focusable="false" className="h-4 w-4 mr-2">
                <use xlinkHref={`#${icon}`} />
              </svg>
              <span className="text-sm leading-4">{text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};