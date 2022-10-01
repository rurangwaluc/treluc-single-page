import React from 'react';


const Footer = () => {

  const currentYear = (new Date().getFullYear());

  return (
    <footer className='bg-tertiary  foot '>
      <div className='container mx-auto'>
        
      <div className='text-center'>

            <p className='pt-4 pb-2 md:pt-2 md:pb-2 text-black text-1xl text-center lg:text-center'>
           This website is built with React and Tailwind CSS
            </p>
      <div className="icons_wrapper">
         <div className="icon_button">
            <div className="icon">
               
               <a href="https://bit.ly/2YkGy9i" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span><a href="https://bit.ly/2YkGy9i" target="_blank">LinkedIn</a></span>
         </div>
         <div className="icon_button">
            <div className="icon">
               
               <a href="https://github.com/rurangwaluc" target="_blank"><i className="fab fa-github"></i></a>
            </div>
            <span><a href="https://github.com/rurangwaluc" target="_blank">GitHub</a></span>
         </div>
         <div className="icon_button">
            <div className="icon">
               
               <a href="https://twitter.com/rurangwa__luc" target="_blank"><i className="fab fa-twitter"></i></a>
            </div>
            <span><a href="https://twitter.com/rurangwa__luc" target="_blank">Twitter</a></span>
         </div>
         
      </div>
      </div>

        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-center'>

          <p className='text-paragraph opacity-80 text-[15px] '>
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
