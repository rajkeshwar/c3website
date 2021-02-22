import React, { useState } from 'react'
import { CrossIcon, HornIcon } from '../icons/common';
import { PropTypes } from 'prop-types';

const BannerTemplate = ({ shortText, longText, buttonText, onClose }) => {
  return ( 
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <HornIcon className="text-white"/>
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">{shortText}</span>
              <span className="hidden md:inline">{longText}</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a href="#" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
              {buttonText}
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button type="button" onClick={_ => onClose(false)} className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-1 focus:ring-white sm:-mr-2">
              <span className="sr-only">Dismiss</span>
              <CrossIcon className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

BannerTemplate.propTypes = {
  buttonText: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired,
  longText: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

const HeaderBanner = ( props ) => {
  const [show, setShow] = useState(true)

  if ( !show ) return '';
  
  return <BannerTemplate {...props} show={show} onClose={setShow}/>
}
 
export default HeaderBanner;