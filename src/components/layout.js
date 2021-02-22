import PropTypes from "prop-types";
import React from "react";
import Footer from "./Footer";
import HeaderBanner from "./HeaderBanner";
import MainNavbar from "./MainNavbar";
import SvgComponent from '../icons/svg1';
import SvgComponent2 from '../icons/svg2';
import SvgComponent3 from '../icons/svg3';
import SvgComponent4 from '../icons/svg4';


function Layout({ children, carouselComponent }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <HeaderBanner 
        buttonText="View more"
        shortText="We announce a brand new course" 
        longText={`New student deal | We're excited to announce a brand new course.`}
      />
      <MainNavbar/>

      <SvgComponent/>
      <SvgComponent2/>
      <SvgComponent3/>
      <SvgComponent4/>

      {carouselComponent}

      {children}

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  carouselComponent: PropTypes.node,
};

export default Layout;
