import React from 'react'
import Image from 'react-bootstrap/Image';

const courseCubeLinks = [
  "CourseCube for Business", "Teach on CourseCube", "About us", 
  "Contact us", "Careers", "Blog", "Help and Support", "Affiliate", 
  "Terms", "Privacy policy", "Cookie settings", 
  "Sitemap", "Featured courses"
];

const FooterLinks = () => {

  const dashedCase = title => title.replace(/\s/g, '-').toLowerCase()

  return ( 
    <div className="w-full">
      <ul className="text-sm grid grid-cols-1 md:grid-cols-3 gap-1">
        {courseCubeLinks.map((course, idx) => (
          <li key={idx} className="font-thin">
            <a href={dashedCase(course)}>{course}</a>
          </li>
        ))}
      </ul>
    </div>
   );
}

const Footer = () => {
  return ( 
    <footer className="w-full bg-gray-700 text-white">
      <div className="flex-1 w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 pb-4">
            <FooterLinks/>
          </div>
          <div className="md:w-1/3 text-sm flex flex-col">
            
            <div className="flex-1">
              <div className="text-sm mb-4 flex justify-start md:justify-end">
                <span>
                  <p>CourseCube Private Limited</p>
                  <div className="font-extralight py-2">
                    <p>#57, 1st Floor, 17th Cross, 7th Main</p>
                    <p>NS Palya, BTM Layout-2nd Stage</p>
                    <p>Bengaluru - 560076</p>
                  </div>
                  <div className="font-light">
                    <p>Phone :- 77950 99 999</p>
                    <p>Email :- training@coursecube.com</p>
                  </div>
                </span>
              </div>
            </div>
            
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-400 pt-4 mt-4">
          <div className="">
            <Image style={{ height: '50px'}} src={`https://coursecube.com/jlc/1.0/images/CCLogo-White-1.png`} />
          </div>
          <p className="font-extralight text-xs">© 2020 CourseCube Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;

