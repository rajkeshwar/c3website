import React from 'react'
import clsx from 'clsx'

/* eslint react/prop-types: 0 */

export const HornIcon = ({ className }) => {
  return ( 
    <svg className={clsx('h-6', 'w-6', className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  );
}

export const CrossIcon = ({ className }) => {
  return (
    <svg className={clsx('h-6', 'w-6', className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export const CheckIcon = ({ className }) => {
  return (
    <svg className={clsx('h-6', 'w-6', className)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  )
}

export const ArrowUp = ({ className }) => {
  return (
    <svg className={clsx('h-6', 'w-6', className)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
    </svg>
  )
}

export const ArrowDown = ({ className }) => {
  return (
    <svg className={clsx('h-6', 'w-6', className)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  )
}

export const FullFadedStar = ({ className }) => {
  return ( 
    <svg className={clsx('h-6', 'w-6', className)} fill="#eb8a2f" stroke="currentColor" viewBox="0 0 46 44" xmlns="http://www.w3.org/2000/svg">
      <path stroke="#7C6919" strokeWidth="3" d="M23 36.5L8.893 43.916l2.694-15.708L.175 17.084l15.772-2.292L23 .5l7.053 14.292 15.772 2.292-11.412 11.124 2.694 15.708z" fillRule="evenodd"/>
    </svg>
   );
}

export const HalfFadedStar = ({ className }) => {
  return (
    <svg className={clsx('h-6', 'w-6', className)} fill="#eb8a2f" viewBox="0 0 46 44" xmlns="http://www.w3.org/2000/svg">
      <g role="presentation">
        <path d="M22.825 36L8.72 43.416l2.694-15.708L0 16.584l15.772-2.292L22.825 0z" strokeWidth="3" stroke="#7C6919"/>
        <polygon fill="#fff" strokeWidth="3" stroke="#7C6919" points="22.8253564 36 22.8253564 2.34479103e-13 29.8787794 14.2917961 45.6507128 16.5835921 34.2380346 27.7082039 36.9322024 43.4164079"/>
      </g>
    </svg>
  )
}

export const CalendarIcon = ({ className }) => {
  return (
    <svg className={clsx('h-6', 'w-6', className)}  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>
  )
}

export const GlobeIcon = ({ className }) => {
  return (
    <svg className={clsx('h-6', 'w-6', className)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
    </svg>
  )
}

export const ExclamatinIcon = ({ className }) => {
  return (
    <svg className={clsx('h-6', 'w-6', className)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  )
}

export const BriefcaseIcon = ({ className }) => {
  return (
    <svg className={clsx('h-6', 'w-6', className)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  )
}